import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { CartItem } from './CartItem.entity';
import { User } from './User.entity';

@Entity({ name: 'SHOPPING_CART' })
export class ShoppingCart {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'TOTAL' })
    total: number;

    @Column({ name: 'SUBTOTAL' })
    subtotal: number;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;
    
    @OneToMany(()=>CartItem, cartItem=>cartItem.shoppingCartId, { cascade: true })
    cartItems : Promise <CartItem[]>;
  
    @OneToOne(() => User)
    @JoinColumn({ name: 'USER_ID' })
    userId: number;
}