import { CredencialInterface } from '../interfaces/credencial.interface';

export class Credencial implements CredencialInterface {
  nome?: string;
  email: string;
  senha: string;
  token?: string;

  constructor(props: CredencialInterface) {
    this.nome = props.nome;
    this.email = props.email;
    this.senha = props.senha;
    this.token = props.token;
  }
}
