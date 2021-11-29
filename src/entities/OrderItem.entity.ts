import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne} from 'typeorm';
import { Product } from './Product.entity';
import { Order } from './Order.entity';

@Entity({ name: 'ORDER_ITEM' })
export class OrderItem {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id?: number;

    @Column({ name: 'QUANTITY' })
    quantity: number;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'PRODUCT_ID' })
    productId: number;

    @ManyToOne(()=>Order, order=>order.orderItems)
    @JoinColumn({ name: 'ORDER_ID' })
    orderId? :number




    
}