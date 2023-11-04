import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../services/categoria.service';
import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TabelaComponent } from '../components/tabela/tabela.component';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [
    CommonModule,
    TuiButtonModule,
    TabelaComponent,
    RouterLink,
    TuiNotificationModule,
  ],
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export default class ListaCategoriasComponent {
  categorias$ = this.categoriaService.listar();
  public erroAoDeletar = false;
  constructor(private readonly categoriaService: CategoriaService) { }

  public deletar(id: number): void {
    this.erroAoDeletar = false;

    this.categoriaService.deletar(id).subscribe({
      next: () => {
        this.categorias$ = this.categoriaService.listar();
      },
      error: () => {
        this.erroAoDeletar = true;
      }
    });
  }
}
