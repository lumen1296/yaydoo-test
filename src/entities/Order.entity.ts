import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne} from 'typeorm';
import { OrderItem } from './OrderItem.entity';
import { Payment } from './Payment.entity';
import { User } from './User.entity';

@Entity({ name: 'ORDER' })
export class Order {

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
    
    @OneToMany(()=>OrderItem, orderItem=>orderItem.orderId)
    orderItems : Promise <OrderItem[]>;
  
    @ManyToOne(()=>User, user=>user.orders)
    @JoinColumn({ name: 'USER_ID' })
    userId : number

    @OneToOne(() => Payment)
    @JoinColumn({ name: 'Payment_ID' })
    paymentId: Payment;

    
    @Column({ name: 'STATUS' })
    status: boolean;
}