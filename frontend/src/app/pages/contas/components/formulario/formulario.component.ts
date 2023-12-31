import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import {TuiDataListModule} from '@taiga-ui/core';
import { CategoriaService } from 'src/app/pages/categorias/services/categoria.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;

  categorias$ = this.categoriaService.listar();

  constructor(
    private readonly controlContainer: ControlContainer,
    private readonly categoriaService: CategoriaService

  ) { }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}
