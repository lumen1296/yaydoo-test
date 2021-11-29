import { User } from "@entities/User.entity";
import { OrderItemDTO } from "./OrderItem.dto";


export interface OrderDTO {
    id: number;
    total: number;
    subtotal: number;
    createDate: Date;
    updateDate: Date;
    orderItems : OrderItemDTO[];
    userId: number;
    paymentId: number;
    status : boolean;

}