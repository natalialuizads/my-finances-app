import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BalancoService {
  constructor(private prisma: PrismaService) {}

  async relatorio() {
    return this.balancoTotal()
  }

  async balancoTotal() {
    const contas = await this.prisma.conta.findMany();

    const valorTotal = contas.reduce((acc: number, conta) => {
      return acc + Number(conta.valor);
    }, 0);

    return {
      valorTotal,
      categorias: await this.balancoPorCategoria(),
    };
  }

  async balancoPorCategoria() {
    const contas = await this.prisma.conta.findMany();

    const categorias = await this.prisma.categoria.findMany();

    const balancoPorCategoria = categorias.map((categoria) => {
      const valorTotal = contas.reduce((acc, conta) => {
        if (conta.categoriaId === categoria.id) {
          return acc + conta.valor;
        }
        return acc;
      }, 0);

      return {
        nome: categoria.nome,
        valorTotal,
      };
    });

    return balancoPorCategoria;
  }
}
