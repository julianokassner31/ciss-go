import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselProdutosComponent } from './components/carousel-produtos/carousel-produtos.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    CarouselProdutosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    AutoCompleteModule,
    CarouselModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule,
  ],
  providers: [LoginService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
