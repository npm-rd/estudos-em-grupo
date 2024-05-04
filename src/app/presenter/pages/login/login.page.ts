import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
  styleUrl: 'login.page.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LoginPage {}
