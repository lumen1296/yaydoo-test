import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity({ name: 'PRODUCT' })
export class Product {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'SKU' })
    sku: string;

    @Column({ name: 'NAME' })
    name: string;

    @Column({ name: 'PRICE' })
    price: string;

    @Column({ name: 'QUANTITY' })
    quantity: string;
}