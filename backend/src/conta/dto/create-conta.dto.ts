import { IsNumber, IsString } from 'class-validator';

export class CreateContaDTO {
  @IsString()
  descricao: string;

  @IsString()
  valor: string;

  @IsNumber()
  categoriaId: number;
}