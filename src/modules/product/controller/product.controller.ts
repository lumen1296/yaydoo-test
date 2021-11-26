import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from '../service/product.service';

@Controller('')
export class ProductController {

    constructor(
        private productService: ProductService
      ) {}
    
      @Get('/products/')
      getProducts() {
        return this.productService.getProducts();
      }

        
      @Get('/products/:id')
      getProductsById(@Query('id') id: number) {
        return this.productService.getProductById(id);
      }
    
    


}
