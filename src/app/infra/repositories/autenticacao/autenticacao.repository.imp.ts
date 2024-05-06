import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { Credencial } from '../../../domain/entities/credencial';
import { Erro } from '../../../domain/entities/erro';
import { AutenticacaoRepository } from '../../../domain/repositories/autenticacao.repository';
import { CredencialModel } from '../../models/credencial.model';

@Injectable()
export class AutenticacaoRepositoryImp extends AutenticacaoRepository {
  constructor(private http: HttpClient) {
    super();
  }

  realizarLogin(credencial: Credencial): Observable<Credencial> {
    let params = { email: credencial.email, senha: credencial.senha };
    return this.http
      .get(`mock/credenciais`, {
        params: new HttpParams({ fromObject: params }),
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        catchError((erro) => {
          return throwError(() => erro);
        }),
        switchMap((response: any) => {
          if (response.length == 0) {
            return throwError(() => new Erro('Login/Senha inválido!'));
          }

          return of(CredencialModel.fromJson(response[0]));
        })
      );
  }

  realizarCadastro(credencial: Credencial): Observable<Credencial> {
    return this.http
      .post(`mock/credenciais`, CredencialModel.toJson(credencial))
      .pipe(
        map((response) => {
          return CredencialModel.fromJson(response);
        })
      );
  }
}
