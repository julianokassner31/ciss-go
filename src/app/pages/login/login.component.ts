import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'go-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      clientSecret: ['poder7547'],
      clientID: ['cisspoder-oauth'],
      grantType: ['password'],
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (resp) => {
        debugger;
        this.router.navigate(['inicio']);
      },
      (error) =>
        this.messageService.add({
          severity: 'error',
          detail:
            error.status == 401
              ? 'Usuário ou Senha inválido'
              : 'Entre em contato com o suporte',
        })
    );
  }
}
