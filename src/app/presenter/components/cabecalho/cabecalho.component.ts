import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecalho-componente',
  templateUrl: 'cabecalho.component.html',
  styleUrls: ['cabecalho.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CabecalhoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
