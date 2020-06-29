import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'go-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$: Observable<any>;
  constructor(private store: Store<any>) {
    this.loading$ = this.store.pipe(select('loading'));
  }

  ngOnInit(): void {}
}
