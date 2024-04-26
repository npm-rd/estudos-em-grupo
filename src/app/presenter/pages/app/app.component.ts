import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog';
}
