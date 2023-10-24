import {
  Injectable,
  NotAcceptableException,
  ConflictException,
} from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoriaExistente = await this.prisma.categoria.findUnique({
      where: {
        nome: createCategoriaDto.nome,
      },
    });

    if (categoriaExistente) {
      throw new ConflictException('Categoria já existe');
    }

    return this.prisma.categoria.create({
      data: createCategoriaDto,
    });
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  async findOne(id: number) {
    await this.categoriaNaoExiste(id);

    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.categoriaNaoExiste(id);

    return this.prisma.categoria.update({
      where: { id },
      data: updateCategoriaDto,
    });
  }

  async remove(id: number) {
    await this.categoriaNaoExiste(id);

    return this.prisma.categoria.delete({
      where: { id },
    });
  }

  async categoriaNaoExiste(id: number): Promise<void> {
    const categoria = await this.findOne(id);

    if (!categoria) {
      throw new NotAcceptableException('Categoria não encontrada');
    }
  }
}
