import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacaoService } from '../../../infra/services/autenticacao.service';

@Component({
  selector: 'menu-login-component',
  templateUrl: 'menu_login.component.html',
  styleUrl: 'menu_login.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuLoginComponent {
  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {}

  get usuarioLogado() {
    return this.autenticacaoService.usuarioLogado;
  }

  get credencial() {
    return this.autenticacaoService.credencial;
  }

  sair() {
    this.autenticacaoService.removerCredencial();
  }
}
