import { Categoria } from '../../categorias/interfaces/categoria';

export interface Conta {
  id?: number;
  descricao: string;
  valor: string;

  categoria: Categoria
}
