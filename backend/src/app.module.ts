import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContaModule } from './conta/conta.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ContaModule, CategoriaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
