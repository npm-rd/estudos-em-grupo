import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';

@Component({
  selector: 'blog-page',
  templateUrl: 'blog.page.html',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, RouterOutlet],
})
export class BlogPage {}
