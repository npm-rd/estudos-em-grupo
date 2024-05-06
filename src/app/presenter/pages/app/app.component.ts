import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AutenticacaoService } from '../../../infra/services/autenticacao.service';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
    this.autenticacaoService.resgatarCredencial();
  }
}
