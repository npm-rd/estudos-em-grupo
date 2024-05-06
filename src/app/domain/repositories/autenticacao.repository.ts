import { Observable } from 'rxjs';
import { Credencial } from '../entities/credencial';

export abstract class AutenticacaoRepository {
  abstract realizarLogin(credencial: Credencial): Observable<Credencial>;
  abstract realizarCadastro(credencial: Credencial): Observable<Credencial>;
}
