import { Injectable } from '@angular/core';
import { Credencial } from '../../domain/entities/credencial';

@Injectable()
export class AutenticacaoService {
  credencial?: Credencial;

  get usuarioLogado(): boolean {
    return !!this.credencial;
  }

  resgatarCredencial() {
    let credencial = sessionStorage.getItem('credencial');
    if (credencial) {
      this.credencial = new Credencial(JSON.parse(credencial));
    }
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
