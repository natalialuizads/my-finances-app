
export interface Balanco {
  valorTotal: number;
  categorias: BalancoPorCategoria[];
}

interface BalancoPorCategoria {
  nome: string;
  valorTotal: number;
}
