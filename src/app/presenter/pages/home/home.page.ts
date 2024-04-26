import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrl: 'home.page.scss',
  standalone: true,
  imports: [CommonModule],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
