import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContaModule } from './conta/conta.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BalancoModule } from './balanco/balanco.module';

@Module({
  imports: [ContaModule, CategoriaModule, BalancoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
