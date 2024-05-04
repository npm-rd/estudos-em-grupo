import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuLoginComponent } from '../menu_login/menu_login.component';

@Component({
  selector: 'cabecalho-componente',
  templateUrl: 'cabecalho.component.html',
  styleUrls: ['cabecalho.component.scss'],
  standalone: true,
  imports: [CommonModule, MenuComponent, MenuLoginComponent],
})
export class CabecalhoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
