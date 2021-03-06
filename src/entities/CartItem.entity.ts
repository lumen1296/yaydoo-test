import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import { Product } from './Product.entity';
import { ShoppingCart } from './ShoppingCart.entity';

@Entity({ name: 'CART_ITEM' })
export class CartItem {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'QUANTITY' })
    quantity: number;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'PRODUCT_ID' })
    productId: number;

    @ManyToOne(()=>ShoppingCart, shoppingCart=>shoppingCart.cartItems, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'SHOPPING_CART_ID' })
    shoppingCartId :number



    
}