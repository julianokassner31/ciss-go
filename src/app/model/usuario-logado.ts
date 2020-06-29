import { Empresa } from './index';

export interface UsuarioLogado {
  birthday: string;
  email: string;
  empresas: Array<Empresa>;
  ended: string;
  extension: string;
  firstname: string;
  fullname: string;
  id: number;
  idEmpresa: number;
  lastname: string;
  linkedin: string;
  nomeFantasia: String;
  phone: string;
  picture: string;
  skype: string;
  started: null;
  title: string;
  username: String;
}
