import { CartItemDTO } from "@DTO/CartItem.dto";
import { ShoppingCartDTO } from "@DTO/ShoppingCart.dto";
import { CartItem } from "@entities/CartItem.entity";
import { ShoppingCart } from "@entities/ShoppingCart.entity";


export const cartItemMapper = async (cartItem: CartItem): Promise<CartItemDTO> => {
  const cartItemDTO: CartItemDTO = {
    id: cartItem.id,
    productId: cartItem.productId,
    createDate: cartItem.createDate,
    quantity: cartItem.quantity,
    shoppingCartId: cartItem.shoppingCartId,
    updateDate: cartItem.updateDate
  }
  return cartItemDTO;
}

export const cartItemsMapper = async (cartItems: CartItem[]): Promise<CartItemDTO[]> => {

  const cartItemDTO: CartItemDTO[] = []
  cartItems.forEach((cartItem) => {
    cartItemDTO.push( {
      id: cartItem.id,
      productId: cartItem.productId,
      createDate: cartItem.createDate,
      quantity: cartItem.quantity,
      shoppingCartId: cartItem.shoppingCartId,
      updateDate: cartItem.updateDate
    })
  });

  return cartItemDTO;
}
export const shoppingCartMapper = async (shoppingCart: ShoppingCart): Promise<ShoppingCartDTO> => {

  const shoppingCartDTO: ShoppingCartDTO = {
    userId: shoppingCart.userId,
    updateDate: shoppingCart.updateDate,
    createDate: shoppingCart.createDate,
    total: shoppingCart.total,
    subtotal: shoppingCart.subtotal,
    id: shoppingCart.id,
    cartItems: await cartItemsMapper(await shoppingCart.cartItems)
  }
  return shoppingCartDTO;
}
