export interface CartItemDTO {
    id: number;
    shoppingCartId: number;
    productId: number;
    quantity: number;
    createDate: Date;
    updateDate: Date;
}