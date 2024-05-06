import { Injectable } from '@angular/core';
import { Credencial } from '../../domain/entities/credencial';

@Injectable()
export class AutenticacaoService {
  credencial?: Credencial;

  get usuarioLogado(): boolean {
    return !!this.credencial;
  }

  salvarCredencial(credencial: Credencial) {
    sessionStorage.setItem('credencial', JSON.stringify(credencial));
    this.credencial = credencial;
  }

  removerCredencial() {
    sessionStorage.removeItem('credencial');
    this.credencial = undefined;
  }
}
