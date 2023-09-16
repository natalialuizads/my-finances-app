import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { Conta } from '../../../interfaces/conta';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [
    CommonModule,
    TuiTableModule,

  ],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  @Input() contas: Conta[] = [];

  readonly columns = ['descricao', 'valor'];
}
