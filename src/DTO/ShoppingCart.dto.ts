import { User } from "@entities/User.entity";
import { CartItemDTO } from "./CartItem.dto";

export interface ShoppingCartDTO {
    id: number;
    total: number;
    subtotal: number;
    createDate: Date;
    updateDate: Date;
    cartItems? : CartItemDTO[];
    userId: number;
}