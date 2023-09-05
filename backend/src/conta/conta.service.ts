
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) {}

  async criar(data: any) {
    return this.prisma.conta.create({
      data,
    });
  }

  async listar() {
    return this.prisma.conta.findMany();
  }
}