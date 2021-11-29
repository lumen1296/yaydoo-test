import { OrderDTO } from '@DTO/Order.dto';
import JwtAuthenticationGuard from '@modules/auth/guards/jwt-authentication.guard';
import { Body, Controller, HttpCode, HttpStatus, Post, Query, UseGuards } from '@nestjs/common';
import { OrderService } from '../service/order.service';

@Controller('')
export class OrderController {
    constructor(
        private readonly orderService: OrderService
      ) { }
    

    @UseGuards(JwtAuthenticationGuard)
    @Post('/order/')
    @HttpCode(HttpStatus.CREATED)
    addItemCart(@Query('id user') idUser: number) {
      return this.orderService.createOrder(idUser);
    }
    

}
