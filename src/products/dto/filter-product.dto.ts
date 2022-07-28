import { IsOptional, IsPositive, Min, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterProductsDTO {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  limit: number;

  @IsOptional()
  @Min(0)
  @ApiProperty()
  offset: number;

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  minPrice: number;

  @IsPositive()
  @ValidateIf((o) => o.minPrice)
  @ApiProperty()
  maxPrice: number;
}
