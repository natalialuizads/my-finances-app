import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';

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
  @Input() contas: any = [];

  readonly columns = ['descricao', 'valor'];
}
