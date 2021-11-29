import { User } from "@entities/User.entity";
import { OrderItemDTO } from "./OrderItem.dto";


export interface PaymentDTO {
    id: number;
    amount: number;
    adress: string
    createDate: Date;
    updateDate: Date;

}