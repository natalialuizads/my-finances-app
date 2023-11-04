import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  template: '<router-outlet></router-outlet>',
})
export default class CategoriasComponent {

}
