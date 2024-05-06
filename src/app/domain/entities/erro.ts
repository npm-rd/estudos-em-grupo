export class Erro {
  constructor(mensagem?: string) {
    this.mensagem = mensagem ?? this.mensagem;
  }

  mensagem = 'Um erro ocorreu!';
}
