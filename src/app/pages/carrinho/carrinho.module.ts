import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';

NgModule({
  imports: [CommonModule, CarrinhoRoutingModule],
  declarations: [CarrinhoComponent, HeaderComponent],
  providers: [],
  exports: [],
});
export class CarrinhoModule {}
