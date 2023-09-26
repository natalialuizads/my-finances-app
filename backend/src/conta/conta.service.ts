
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContaDTO } from './dto/create-conta.dto';
import { UpdatePutContaDTO } from './dto/update-put.dto';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) { }

  async criar(data: CreateContaDTO) {
    return this.prisma.conta.create({
      data,
    });
  }

  async listar() {
    return this.prisma.conta.findMany();
  }

  async buscarPorId(id: number) {
    return this.prisma.conta.findUnique({
      where: { id },
    });
  }

  async editar(id: number, data: UpdatePutContaDTO) {
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

  async contaExiste(id: number) {
    const conta = await this.buscarPorId(id);

    if (!conta) {
      throw new NotAcceptableException('Conta não encontrada');
    }
  }
}
