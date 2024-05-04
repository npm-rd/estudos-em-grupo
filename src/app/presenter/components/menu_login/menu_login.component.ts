import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'menu-login-component',
  templateUrl: 'menu_login.component.html',
  styleUrl: 'menu_login.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
