import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../interfaces/categoria';
import { Router, RouterLink } from '@angular/router';
import { criarFormCategoria } from '../components/formulario/form-fields';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    RouterLink,
    TuiNotificationModule,
    FormularioComponent
  ],
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export default class EditarCategoriaComponent implements OnInit {
  public error = false;
  public form: any = criarFormCategoria();
  @Input() id!: number;

  constructor(
    private readonly categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaService.buscarPorId(this.id).subscribe({
      next: (categoria) => {
        this.form.patchValue(categoria);
      }
    });
  }

  public editar() {
    this.error = false;
    const categoria = this.form.value as Categoria;
    this.categoriaService
      .editar({ ...categoria, id: this.id })
      .subscribe({
        next: () => {
          this.form.reset();
          this.router.navigate(['/categorias']);
        },
        error: () => {
          this.error = true;
        }
      });
  }
}
