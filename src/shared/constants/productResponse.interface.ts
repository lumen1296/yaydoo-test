import { ProductDTO } from "@DTO/Product.dto";

export interface ProductResponse {
    products: ProductDTO[],
    items: number,
    page: number
}