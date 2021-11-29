import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProductService } from '../service/product.service';

@Controller('')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }
  
  @Get('/products/')
  getProducts(@Query('items') items: number,
    @Query('page') page: number) {
    return this.productService.getProducts(items, page);
  }


  @Get('/products/:id')
  getProductsById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }


  @Get('/productsFilter/')
  @ApiQuery({
    name: "value2",
    type: String,
    required: false
  })
  getProductsByFilter(
    @Query('items') items: number,
    @Query('page') page: number,
    @Query('name') name: string,
    @Query('value1') value1: string,
    @Query('value2') value2?: string
  ) {
    return this.productService.getProductByFilter(items, page, name, value1, value2);
  }



}
