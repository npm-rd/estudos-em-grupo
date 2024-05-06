import { Observable } from 'rxjs';
import { Credencial } from '../../entities/credencial';

export abstract class AutenticacaoUsecases {
  abstract realizarLogin(credencial: Credencial): Observable<Credencial>;
  abstract realizarCadastro(credencial: Credencial): Observable<Credencial>;
}
