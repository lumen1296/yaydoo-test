import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order.entity";

@Entity({ name: 'PAYMENT' })
export class Payment {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'AMOUNT' })
    amount: number;

    @Column({ name: 'ADDRESS' })
    adress: number;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;

    

}