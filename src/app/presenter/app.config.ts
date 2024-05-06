import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AutenticacaoRepository } from '../domain/repositories/autenticacao.repository';
import { AutenticacaoUsecases } from '../domain/usecases/autenticacao/autenticacao.usecases';
import { AutenticacaoUsecasesImp } from '../domain/usecases/autenticacao/autenticacao.usecases.imp';
import { AutenticacaoRepositoryImp } from '../infra/repositories/autenticacao/autenticacao.repository.imp';
import { AutenticacaoService } from '../infra/services/autenticacao.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    { provide: AutenticacaoUsecases, useClass: AutenticacaoUsecasesImp },
    { provide: AutenticacaoRepository, useClass: AutenticacaoRepositoryImp },
    AutenticacaoService,
  ],
};
