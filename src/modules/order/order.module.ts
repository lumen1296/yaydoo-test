import { CartItem } from '@entities/CartItem.entity';
import { Order } from '@entities/Order.entity';
import { OrderItem } from '@entities/OrderItem.entity';
import { ShoppingCart } from '@entities/ShoppingCart.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([Order, OrderItem, CartItem, ShoppingCart])
    ],
    providers: [OrderService],
    controllers: [OrderController],
    exports: [OrderService]
})
export class OrderModule {}
