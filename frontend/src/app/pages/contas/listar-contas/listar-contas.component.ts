import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaService } from '../services/conta.service';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TabelaComponent } from '../components/tabela/tabela.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-contas',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TabelaComponent,
    RouterLink,
    TuiNotificationModule,
  ],
  templateUrl: './listar-contas.component.html',
  styleUrls: ['./listar-contas.component.scss']
})
export default class ListarContasComponent {
  contas$ = this.contaService.listar();
  public erroAoDeletar = false;

  constructor(private readonly contaService: ContaService) { }

  public deletar(id: number): void {
    this.erroAoDeletar = false;

    this.contaService.deletar(id).subscribe({
      next: () => {
        this.contas$ = this.contaService.listar();
      },
      error: (err) => {
        this.erroAoDeletar = true;
      }
    });
  }
}
