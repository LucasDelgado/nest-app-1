import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name para ver en swagger` })
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly stock: number;

  @ApiProperty()
  readonly image: string;
}
