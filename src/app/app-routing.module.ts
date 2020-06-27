import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./pages/carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
