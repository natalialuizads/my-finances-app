import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContaModule } from './conta/conta.module';

@Module({
  imports: [ContaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
