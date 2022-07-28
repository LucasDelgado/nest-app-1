import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { FilterProductsDTO } from './dto/filter-product.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';

@ApiExtraModels(FilterProductsDTO)
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() params?: FilterProductsDTO) {
    return this.productsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.productsService.remove(id);
  }
}
