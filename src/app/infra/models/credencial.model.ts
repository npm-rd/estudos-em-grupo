import { Credencial } from '../../domain/entities/credencial';

export class CredencialModel {
  static fromJson(json: any): Credencial {
    return new Credencial({
      nome: json.nome,
      email: json.email,
      senha: json.senha,
      token: json.token,
    });
  }

  static toJson(credencial: Credencial) {
    return {
      nome: credencial.nome,
      email: credencial.email,
      senha: credencial.senha,
    };
  }
}
