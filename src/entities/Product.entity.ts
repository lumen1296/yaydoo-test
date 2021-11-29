import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'PRODUCT' })
export class Product {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'SKU' })
    sku: string;

    @Column({ name: 'NAME' })
    name: string;

    @Column({ name: 'PRICE' })
    price: number;

    @Column({ name: 'QUANTITY' })
    quantity: number;

    @Column({ name: 'CREATE_DATE' })
    createDate: Date;

    @Column({ name: 'UPDATE_DATE' })
    updateDate: Date;
}