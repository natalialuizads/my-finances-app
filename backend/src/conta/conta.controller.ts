import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContaService } from './conta.service';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get()
  async lista() {
    return this.contaService.listar();
  }

  @Post()
  async criar(@Body() body: any) {
    return this.contaService.criar(body);
  }
}
