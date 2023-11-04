import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../interfaces/categoria';
import { criarFormCategoria } from '../components/formulario/form-fields';

@Component({
  selector: 'app-criar-categoria',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiButtonModule,
    RouterLink,
    TuiNotificationModule,
    FormularioComponent
  ],
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.scss']
})
export default class CriarCategoriaComponent {
  error = false;
  statusCodeError = 0;
  public form = criarFormCategoria();

  constructor(
    private readonly categoriaService: CategoriaService,
    private router: Router,
  ) { }

  public criar() {
    this.error = false
    const categoria = this.form.value as Categoria;
    this.categoriaService.criar(categoria).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/categorias']);
      },
      error: (response) => {
        this.error = true;
        this.statusCodeError= response.status;
      }
    })
  }
}
