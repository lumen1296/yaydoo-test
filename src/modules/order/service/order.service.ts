import { CartItem } from '@entities/CartItem.entity';
import { Order } from '@entities/Order.entity';
import { OrderItem } from '@entities/OrderItem.entity';
import { ShoppingCart } from '@entities/ShoppingCart.entity';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(ShoppingCart)
        private shoppingCartRepository: Repository<ShoppingCart>,
        @InjectRepository(OrderItem)
        private orderItemRepository: Repository<OrderItem>,

    ) { }

    async createOrder(userId: number) {
        const shoppingCartToOrder = await this.shoppingCartRepository.findOne({ where: { userId }, relations: ["cartItems"] });
        if (shoppingCartToOrder?.cartItems) {

            const itemCartsToOrderItems = await shoppingCartToOrder.cartItems;
            const orderItems: OrderItem[] = [];
            const order = await this.orderRepository.save({
                createDate: shoppingCartToOrder.createDate,
                subtotal: shoppingCartToOrder.subtotal,
                total: shoppingCartToOrder.total,
                updateDate: shoppingCartToOrder.updateDate,
                userId,
                status: false
            });
            itemCartsToOrderItems.forEach((cartItem) => {
                orderItems.push({
                    createDate: new Date(),
                    productId: cartItem.productId,
                    updateDate: new Date(),
                    quantity: cartItem.quantity,
                    orderId: order.id,
                });
            })
            await this.orderItemRepository.save(orderItems);
            console.log('aca')
            console.log(await this.orderRepository.findOne({ where: { userId }, relations: ["orderItems"] }));
            //await this.shoppingCartRepository.delete(shoppingCartToOrder.id);
            //await this.shoppingCartRepository.delete(shoppingCartToOrder.id);
            
            return Promise.resolve(await this.orderRepository.findOne({ where: { userId }, relations: ["orderItems"] }));
        }

        throw new NotFoundException();
    }

}
