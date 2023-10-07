import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { ContaService } from '../services/conta.service';
import { Conta } from '../interfaces/conta';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { criarFormConta } from '../components/formulario/form-fields';

@Component({
  selector: 'app-criar-conta',
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
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export default class CriarContaComponent {
  error = false;
  statusCodeError = 0;
  public form = criarFormConta();

  constructor(
    private readonly contaService: ContaService,
    private router: Router,
  ) { }

  public criar() {
    this.error = false
    const conta = this.form.value as Conta;
    this.contaService.criar(conta).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/contas']);
      },
      error: (response) => {
        this.error = true;
        this.statusCodeError= response.status;
      }
    })
  }
}
