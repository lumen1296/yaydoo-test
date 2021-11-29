import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Order } from './Order.entity';

@Entity({ name: 'USER' })
export class User {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'NAME' })
    name: string;

    @Column({ name: 'LASTNAME' })
    lastName: string;

    @Column({ name: 'EMAIL' })
    email: string;

    @Column({ name: 'PASSWORD' })
    password: string;

    @Column({ name: 'ENABLE' })
    enable: boolean;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;

    @Column({ name: 'ROLE_ID' })
    roleId: number;

    @OneToMany(type=>Order, order=>order.userId)
    orders : Promise <Order[]>;
}