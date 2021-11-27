import { ShoppingCartDTO } from '@DTO/ShoppingCart.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ShopingCartService } from '../service/shoping-cart.service';

@Controller('shoping-cart')
export class ShopingCartController {
    constructor(
      private shopingCartService: ShopingCartService
    ) { }
  
    @Post('/products/')
    createShoppingCart(@Body() shopingCart: ShoppingCartDTO) {
      return this.shopingCartService.createShoppingCart(shopingCart);
    }
  
  
   }
