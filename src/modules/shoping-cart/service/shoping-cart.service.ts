import { ProductDTO } from '@DTO/Product.dto';
import { ShoppingCartDTO } from '@DTO/ShoppingCart.dto';
import { ShoppingCart } from '@entities/ShoppingCart.entity';
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ShopingCartService {

    constructor(
        @InjectRepository(ShoppingCart)
        private shoppingCartRepository: Repository<ShoppingCart>
    ) { }

    async createShoppingCart(shopingCart: ShoppingCartDTO){
        this.shoppingCartRepository.save(shopingCart);
      }

}
