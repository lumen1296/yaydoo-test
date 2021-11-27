import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopingCartController } from './controller/shoping-cart.controller';
import { ShopingCartService } from './service/shoping-cart.service';
import { ShoppingCart } from '@entities/ShoppingCart.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ShoppingCart])
      ],
      providers: [ShopingCartService],
      controllers: [ShopingCartController],
      exports: [ShopingCartService]
})
export class ShopingCartModule {}
