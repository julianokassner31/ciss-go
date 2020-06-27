import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'go-carousel-produtos',
  templateUrl: './carousel-produtos.component.html',
  styleUrls: ['./carousel-produtos.component.scss'],
})
export class CarouselProdutosComponent implements OnInit {
  @Input() titleCarousel: string;
  produtos = [];
  processando = false;
  iconProcessando = 'pi pi-shopping-cart';

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.produtos = [
      {
        descricao: 'Piscina',
        valor: 'R$ 10000,00',
        quantidade: 1000,
        id: 23,
      },
      {
        descricao: 'Chuveiro',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 23232,
      },
      {
        descricao: 'Porta Retrato',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 231,
      },
      {
        descricao: 'Banheira Gold',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 2343,
      },
      {
        descricao: 'Enxada',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 9129,
      },
      {
        descricao: 'Panela de Pressão',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 2351,
      },
      {
        descricao: 'Cabideiro',
        valor: 'R$ 100,00',
        quantidade: 1000,
        id: 3411,
      },
    ];
  }

  adicionarProduto() {
    this.setStateProcessando(true);
    setTimeout(() => {
      this.setStateProcessando(false);
    }, 3000);
  }

  setStateProcessando(state: boolean) {
    this.processando = state;
    this.setStateIconProcessando(state);
  }

  setStateIconProcessando(state: boolean) {
    this.iconProcessando = state
      ? 'pi pi-spin pi-spinner'
      : 'pi pi-shopping-cart';
  }
}
