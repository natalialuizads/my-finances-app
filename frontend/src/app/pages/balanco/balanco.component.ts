import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancoService } from './services/balanco.service';
import { Balanco } from './interfaces/balanco';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-balanco',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.scss']
})
export default class BalancoComponent {
  balanco$:  Observable<Balanco>  = this.balancoService.buscar();

  constructor(private readonly balancoService: BalancoService) { }
}
