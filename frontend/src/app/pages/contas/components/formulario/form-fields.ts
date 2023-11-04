import { inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

export const criarFormConta = () => {
  const fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  return fb.group({
    descricao: ['', { validators: [Validators.required], nonNullable: true }],
    valor: ['', { validators: [Validators.required], nonNullable: true }],
    categoriaId: ['', { validators: [Validators.required], nonNullable: true }],
  });
};
