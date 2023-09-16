import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { ContaService } from '../services/conta.service';
import { Conta } from '../interfaces/conta';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiButtonModule,
    RouterLink,
    TuiNotificationModule
  ],
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export default class CriarContaComponent {
  error = false;
  public form = this.fb.group({
    descricao: ['', { validators: [Validators.required], nonNullable: true }],
    valor: ['', { validators: [Validators.required], nonNullable: true }],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private readonly contaService: ContaService,
    private router: Router,
  ) { }

  public criar() {
    this.error = false
    const conta = this.form.value as Conta;
    this.contaService.criarConta(conta).subscribe({
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
