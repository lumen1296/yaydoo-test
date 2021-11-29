import { CartItemDTO } from '@DTO/CartItem.dto';
import { ShoppingCartDTO } from '@DTO/ShoppingCart.dto';
import { CartItem } from '@entities/CartItem.entity';
import { ShoppingCart } from '@entities/ShoppingCart.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from '@shared/constants/errors.enum';
import { Repository } from 'typeorm';
import { cartItemMapper, shoppingCartMapper } from '../mapper/shoping-cart.mapper';


@Injectable()
export class ShoppingCartService {

    constructor(
        @InjectRepository(CartItem)
        private cartItemRepository: Repository<CartItem>,
        @InjectRepository(ShoppingCart)
        private shoppingCartRepository: Repository<ShoppingCart>
    ) { }

    async addItemCart(cartItem: CartItemDTO) {
        this.cartItemRepository.save({
            createDate: new Date(),
            productId: cartItem.productId,
            quantity: cartItem.productId,
            shoppingCartId: cartItem.shoppingCartId,
            updateDate: new Date()

        });

        return Promise.resolve(cartItemMapper(cartItem));
    }

    async deleteItemCart(cartItemId: number) {
        const itemToDelete = await this.cartItemRepository.findOne(cartItemId);
        if (itemToDelete) {
            await this.cartItemRepository.delete(cartItemId);
            return Promise.resolve();
        }
        else {
            return ERRORS.NOT_FOUND;
        }
    }

    async editQuantityItemCart(id: number, quantity: number) {
        const itemToEdit = await this.cartItemRepository.findOne(id);
        if (itemToEdit) {
            itemToEdit.quantity = quantity;
            itemToEdit.updateDate = new Date();
            await this.cartItemRepository.update(id, itemToEdit);
            return Promise.resolve(cartItemMapper(itemToEdit));
        }
        else {
            return ERRORS.NOT_FOUND;
        }


    }

    async createShoppingCart(userId: number) {
        
        if (! await this.shoppingCartRepository.findOne({ where: { userId } })) {
            const shoppingCart = await this.shoppingCartRepository.save({
                userId,
                updateDate: new Date(),
                createDate: new Date(),
                total: 0,
                subtotal: 0,
            });
            return Promise.resolve(shoppingCartMapper(shoppingCart));
        }

    }


    async getShoppingCart(id: number): Promise<ShoppingCartDTO> {
        const shoppingCart = await this.shoppingCartRepository.findOne({ where: { id }, relations: ["cartItems"] });
        if (shoppingCart) {
            return Promise.resolve(shoppingCartMapper(shoppingCart));
        }
        throw new NotFoundException();;
    }



}
