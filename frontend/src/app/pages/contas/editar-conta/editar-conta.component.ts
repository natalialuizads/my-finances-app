import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conta } from '../interfaces/conta';
import { Router, RouterLink } from '@angular/router';
import { criarFormConta } from '../components/formulario/form-fields';
import { ContaService } from '../services/conta.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Component({
  selector: 'app-editar-conta',
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
  templateUrl: './editar-conta.component.html',
  styleUrls: ['./editar-conta.component.scss']
})
export default class EditarContaComponent {
  error = false;
  public form = criarFormConta();

  constructor(
    private readonly contaService: ContaService,
    private router: Router,
  ) { }

  public editar() {
    this.error = false
    const conta = this.form.value as Conta;
    this.contaService.editar(conta).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/contas']);
      },
      error: () => {
        this.error = true;
      }
    })
  }
}
