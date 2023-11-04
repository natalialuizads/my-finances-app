import { inject } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'

export const criarFormCategoria = () => {
  const fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  return fb.group({
    nome: ['', { validators: [Validators.required], nonNullable: true }],
  });
}
