import { Column, Entity, PrimaryGeneratedColumn, Double, OneToOne, JoinColumn} from 'typeorm';
import { Product } from './Product.entity';

@Entity({ name: 'SHOPPINGCART' })
export class ShoppingCart {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'TOTAL' })
    total: number;

    @Column({ name: 'SUBTOTAL' })
    subtotal: number;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @OneToOne(() => ShoppingCart)
    @JoinColumn({ name: 'shopping_cart_id' })
    shoppingCart: ShoppingCart;

    
}