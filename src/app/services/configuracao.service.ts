import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Configuracao } from '../model';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracaoService {
  constructor(private req: RequestService) {}

  getConfiguracao(idEmpresa: number, idUsuario: number) {
    const uri = `/config/empresa/${idEmpresa}/usuario/${idUsuario}?loading`;
    return this.req.get(uri).pipe(
      tap((resp: any) => {
        const configuracao = new Configuracao();
        resp.data.forEach((config: any) => {
          const key = config.chave;
          configuracao[key] = this.converter(config.valor);
        });
      })
    );
  }

  private converter(valor: any): any {
    if (valor === 'F' || valor === 'T') {
      return valor === 'T' ? true : false;
    }

    return valor;
  }
}
