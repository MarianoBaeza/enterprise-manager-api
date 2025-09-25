import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  enterpriseId: string;
}
