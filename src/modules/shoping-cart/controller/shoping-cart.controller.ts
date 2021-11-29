import { CartItemDTO } from '@DTO/CartItem.dto';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ShoppingCartService } from '../service/shoping-cart.service';

@Controller('')
export class ShopingCartController {
    constructor(
      private shoppingCartService: ShoppingCartService
    ) { }
  
    
    @Post('/shoppingCart/cartItem/')
    @HttpCode(HttpStatus.CREATED)
    @ApiBody({
      schema: {
        properties: {
          'shoppingCartId': { type: 'number' },
          'productId': { type: 'number' },
          'quantity': { type: 'number' },
        }
      }
    })
    addItemCart(@Body() cartItem: CartItemDTO) {
      return this.shoppingCartService.addItemCart(cartItem);
    }

    @Put('/shoppingCart/cartItem/')
    @HttpCode(HttpStatus.NO_CONTENT)
    editQuantityItemCart(@Query('id') id: number, @Query('quantity') quantity: number,) {
      return this.shoppingCartService.editQuantityItemCart(id, quantity);
    }
  

    @Delete('/shoppingCart/cartItem/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteItemCart(@Param('id') id: number) {
      return this.shoppingCartService.deleteItemCart(id);
    }

    @Get('/shoppingCart/:id')
    getShoppingCart(@Param('id') id: number) {
      return this.shoppingCartService.getShoppingCart(id);
    }

  
   }
