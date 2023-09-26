import { IsString } from 'class-validator';

export class CreateContaDTO {
  @IsString()
  descricao: string;

  @IsString()
  valor: string;
}