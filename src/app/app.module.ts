import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
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
import { LoadingComponent } from './components/loading/loading.component';
import { httpInterceptorProviders } from './interceptors/interceptor-providers';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { loadingReducer } from './state/reducers/loading.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    CarouselProdutosComponent,
    LoginComponent,
    LoadingComponent,
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
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
    StoreModule.forRoot({
      loading: loadingReducer,
    }),
  ],
  providers: [LoginService, MessageService, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
