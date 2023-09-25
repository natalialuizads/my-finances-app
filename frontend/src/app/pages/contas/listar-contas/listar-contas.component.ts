import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaService } from '../services/conta.service';
import { TuiButtonModule } from '@taiga-ui/core';
import { TabelaComponent } from '../components/tabela/tabela.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-contas',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TabelaComponent,
    RouterLink
  ],
  templateUrl: './listar-contas.component.html',
  styleUrls: ['./listar-contas.component.scss']
})
export default class ListarContasComponent {
  contas$ = this.contaService.listar();

  constructor(private readonly contaService: ContaService) { }

  public deletar(id: number): void {
    this.contaService.deletar(id).subscribe({
      next: () => {
        this.contas$ = this.contaService.listar();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
