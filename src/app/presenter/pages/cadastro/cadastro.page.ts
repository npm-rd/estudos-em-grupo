import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cadastro-page',
  templateUrl: 'cadastro.page.html',
  styleUrl: 'cadastro.page.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CadastroPage {}
