import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContaDTO } from './dto/create-conta.dto';
import { UpdatePutContaDTO } from './dto/update-put.dto';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) { }

  async criar(data: CreateContaDTO): Promise<CreateContaDTO> {
    data.categoriaId = +data.categoriaId;

    const contaExistente = await this.prisma.conta.findUnique({
      where: {
        descricao: data.descricao,
      },
    });

    if (contaExistente) {
      throw new ConflictException('Uma conta com esses dados já existe.');
    }

    return this.prisma.conta.create({
      data,
    });
  }

  async listar() {
    const contas = await this.prisma.conta.findMany();

    const contasComCategoria = await Promise.all(
      contas.map(async ({ id, descricao, valor, categoriaId }) => {
        const categoria = await this.prisma.categoria.findUnique({
          where: { id: categoriaId },
        });
        
        return {
          id,
          descricao,
          valor,
          categoria,
        };
      }),
    );


    return contasComCategoria;
  }

  async buscarPorId(id: number) {
    return this.prisma.conta.findUnique({
      where: { id },
    });
  }

  async editar(
    id: number,
    data: UpdatePutContaDTO,
  ): Promise<UpdatePutContaDTO> {
    await this.contaExiste(id);

    return this.prisma.conta.update({
      where: { id },
      data,
    });
  }

  async deletar(id: number) {
    await this.contaExiste(id);

    return this.prisma.conta.delete({
      where: { id },
    });
  }

  async contaExiste(id: number): Promise<void> {
    const conta = await this.buscarPorId(id);

    if (!conta) {
      throw new NotAcceptableException('Conta não encontrada');
    }
  }
}
