import { Column, Entity, PrimaryGeneratedColumn, Double} from 'typeorm';

@Entity({ name: 'SHOPPING_CART' })
export class ShoppingCart {

    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'TOTAL' })
    total: number;

    @Column({ name: 'SUBTOTAL' })
    subtotal: number;

}