import { Module } from '@nestjs/common';
import { ContaController } from './conta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContaService } from './conta.service';

@Module({
  imports: [PrismaModule],
  controllers: [ContaController],
  providers: [ContaService],
})
export class ContaModule { }