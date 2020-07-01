import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';

@NgModule({
  imports: [CommonModule, CarrinhoRoutingModule],
  declarations: [CarrinhoComponent],
  providers: [],
  exports: [],
})
export class CarrinhoModule {}
