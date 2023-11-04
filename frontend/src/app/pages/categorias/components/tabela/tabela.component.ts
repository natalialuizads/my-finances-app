import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiNotificationModule, TuiButtonModule } from '@taiga-ui/core';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    CommonModule,
    TuiTableModule,
    RouterLink,
    TuiNotificationModule,
    TuiButtonModule
  ],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  @Input() categorias: Categoria[] = [];

  @Output() deletarCategoria = new EventEmitter<number>();
  readonly columns = ['nome', 'ações'];


  public deletar(id: number | undefined): void {
    this.deletarCategoria.emit(id);
  }
}
