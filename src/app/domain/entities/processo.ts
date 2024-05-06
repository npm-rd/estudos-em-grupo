import { Erro } from './erro';

export enum ProcessoStatus {
  INICIAL,
  CARREGANDO,
  ERRO,
  FINALIZADO,
}

export class Processo {
  constructor(props?: { status?: ProcessoStatus; erro?: Erro }) {
    this.status = props?.status ?? this.status;
    this.erro = props?.erro ?? this.erro;
  }

  status = ProcessoStatus.INICIAL;
  erro?: Erro;

  static inicial = new Processo({ status: ProcessoStatus.INICIAL });
  static carregando = new Processo({ status: ProcessoStatus.CARREGANDO });
  static finalizado = new Processo({ status: ProcessoStatus.FINALIZADO });
  static erro = (erro: Erro) =>
    new Processo({ erro, status: ProcessoStatus.ERRO });

  resetar() {
    this.erro = undefined;
    this.status = 0;
  }
}
