import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { TuiAlertModule, TuiAlertService, TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';
import { ContaService } from '../services/conta.service';

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
    descricao: ['', [Validators.required]],
    valor: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private readonly contaService: ContaService,
    private router: Router,
  ) { }

  public criar() {
    this.error = false
    this.contaService.criarConta(this.form.value).subscribe({
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
