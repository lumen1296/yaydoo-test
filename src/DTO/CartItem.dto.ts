import { Double } from "typeorm";
import { ProductDTO } from "./Product.dto";

export interface ShoppingCartDTO {
    id: number;
    shoppingCartId: number;
    productId: number;
    quantity: number;
    subtotal: number;
}