import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html',
  styleUrl: 'menu.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
