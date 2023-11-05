import { Controller, Get } from '@nestjs/common';
import { BalancoService } from './balanco.service';

@Controller('balanco')
export class BalancoController {
  constructor(private readonly balancoService: BalancoService) { }

  @Get()
  async relatorio() {
    return this.balancoService.relatorio();
  }
}
