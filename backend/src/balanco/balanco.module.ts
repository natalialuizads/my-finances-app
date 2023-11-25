import { Module } from '@nestjs/common';
import { BalancoService } from './balanco.service';
import { BalancoController } from './balanco.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BalancoController],
  providers: [BalancoService],
})
export class BalancoModule { }
