import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credencial } from '../../entities/credencial';
import { AutenticacaoRepository } from '../../repositories/autenticacao.repository';
import { AutenticacaoUsecases } from './autenticacao.usecases';

@Injectable()
export class AutenticacaoUsecasesImp extends AutenticacaoUsecases {
  constructor(private repository: AutenticacaoRepository) {
    super();
  }

  realizarLogin(credencial: Credencial): Observable<Credencial> {
    return this.repository.realizarLogin(credencial);
  }

  realizarCadastro(credencial: Credencial): Observable<Credencial> {
    return this.repository.realizarCadastro(credencial);
  }
}
