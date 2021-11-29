import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopingCartController } from './controller/shoping-cart.controller';
import { ShoppingCartService } from './service/shoping-cart.service';
import { ShoppingCart } from '@entities/ShoppingCart.entity';
import { CartItem } from '@entities/CartItem.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShoppingCart, CartItem])
      ],
      providers: [ShoppingCartService],
      controllers: [ShopingCartController],
      exports: [ShoppingCartService]
})
export class ShopingCartModule {}
