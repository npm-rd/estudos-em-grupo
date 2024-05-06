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
  selector: 'cadastro-page',
  templateUrl: 'cadastro.page.html',
  styleUrl: 'cadastro.page.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class CadastroPage {
  constructor(
    private autenticacaoUsecases: AutenticacaoUsecases,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  formulario = new FormGroup({
    nome: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    senha: new FormControl<string>('', Validators.required),
  });

  processoCadastro = new Processo();
  realizarCadastro() {
    this.processoCadastro = Processo.carregando;
    if (!this.formulario.valid) {
      this.processoCadastro = Processo.inicial;
      this.formulario.markAllAsTouched();
      return;
    }

    let { nome, email, senha } = this.formulario.value;
    let credencial = new Credencial({
      nome: nome!,
      email: email!,
      senha: senha!,
    });
    this.autenticacaoUsecases
      .realizarCadastro(credencial)
      .pipe(take(1))
      .subscribe({
        next: (credencial) => {
          this.autenticacaoService.salvarCredencial(credencial);
          this.router.navigateByUrl('/');
          this.processoCadastro = Processo.finalizado;
        },
        error: (erro) => {
          this.processoCadastro = Processo.erro(erro);
        },
      });
  }
}
