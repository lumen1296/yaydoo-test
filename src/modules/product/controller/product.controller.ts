import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
import { FilterProduct } from '@shared/constants/filterProduct.interface';
import { ProductService } from '../service/product.service';

@Controller('')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Get('/products/')
  getProducts() {
    return this.productService.getProducts();
  }


  @Get('/products/:id')
  getProductsById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }


  @ApiQuery({ name: 'filter', description: 'Gets the Action id'})
  @ApiQuery({ name: 'value', description: 'Gets the Action id'})
  @ApiQuery({ name: 'value2', description: 'Gets the Action id'})
  @Get('/productsFilter/')
  getProductsByFilter(@Query() filter: FilterProduct) {
    return this.productService.getProductByFilter(filter);
  }



}
