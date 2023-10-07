import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ContaService } from './conta.service';
import { CreateContaDTO } from './dto/create-conta.dto';
import { UpdatePutContaDTO } from './dto/update-put.dto';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get()
  async lista() {
    return this.contaService.listar();
  }

  @Post()
  async criar(@Body() body: CreateContaDTO): Promise<CreateContaDTO> {
    return this.contaService.criar(body);
  }

  @Get(':id')
  async buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.contaService.buscarPorId(id);
  }

  @Put(':id')
  async editar(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePutContaDTO,
  ): Promise<UpdatePutContaDTO> {
    return this.contaService.editar(id, data);
  }

  @Delete(':id')
  async deletar(@Param('id', ParseIntPipe) id: number) {
    return this.contaService.deletar(id);
  }
}
