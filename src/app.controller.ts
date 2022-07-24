import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('products/:productId')
  // getProduct(@Param('productId') productId: string) {
  //   return `product ${productId}`;
  // }

  // @Get('categories/:categoryId/products/:productId')
  // getCategory(@Param() { categoryId, productId }) {
  //   return `Product ${productId}, Category ${categoryId}`;
  // }

  // @Post('categories/add')
  // addCategory(@Body() payload: any) {
  //   return {
  //     message: 'Category added',
  //     payload,
  //   };
  // }
}
