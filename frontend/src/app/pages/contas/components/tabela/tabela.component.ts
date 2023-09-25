import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { Conta } from '../../interfaces/conta';
import { RouterLink } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    CommonModule,
    TuiTableModule,
    RouterLink,
    TuiSvgModule
  ],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  @Input() contas: Conta[] = [];
  @Output() deletarConta = new EventEmitter<number>();

  readonly columns = ['descricao', 'valor'];

  public deletar(id: number): void {
    this.deletarConta.emit(id);
  }

}
