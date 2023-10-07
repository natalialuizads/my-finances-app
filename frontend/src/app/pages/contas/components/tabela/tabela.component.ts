import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { Conta } from '../../interfaces/conta';
import { RouterLink } from '@angular/router';
import { TuiNotificationModule, TuiButtonModule } from '@taiga-ui/core';

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
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  @Input() contas: Conta[] = [];
  @Output() deletarConta = new EventEmitter<number>();

  readonly columns = ['descricao', 'valor', 'ações'];

  public deletar(id: number | undefined): void {
    this.deletarConta.emit(id);
  }

}
