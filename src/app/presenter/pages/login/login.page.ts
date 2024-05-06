import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { take } from 'rxjs';
import { Credencial } from '../../../domain/entities/credencial';
import { Processo } from '../../../domain/entities/processo';
import { AutenticacaoUsecases } from '../../../domain/usecases/autenticacao/autenticacao.usecases';
import { AutenticacaoService } from '../../../infra/services/autenticacao.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
  styleUrl: 'login.page.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LoginPage {
  constructor(
    private autenticacaoUsecases: AutenticacaoUsecases,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  formulario = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    senha: new FormControl<string>('', Validators.required),
  });

  processoLogin = new Processo();
  realizarLogin() {
    this.processoLogin = Processo.carregando;
    if (!this.formulario.valid) {
      this.processoLogin = Processo.inicial;
      this.formulario.markAllAsTouched();
      return;
    }

    let { email, senha } = this.formulario.value;
    let credencial = new Credencial({ email: email!, senha: senha! });
    this.autenticacaoUsecases
      .realizarLogin(credencial)
      .pipe(take(1))
      .subscribe({
        next: (credencial) => {
          this.autenticacaoService.salvarCredencial(credencial);
          this.router.navigateByUrl('/');
          this.processoLogin = Processo.finalizado;
        },
        error: (erro) => {
          this.processoLogin = Processo.erro(erro);
        },
      });
  }
}
