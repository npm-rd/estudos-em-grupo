import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-login-component',
  templateUrl: 'menu_login.component.html',
  styleUrl: 'menu_login.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class MenuLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
