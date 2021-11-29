import { Product } from "@entities/Product.entity";
import { ProductDTO } from "@DTO/Product.dto";
import { ProductResponse } from "@shared/constants/productResponse.interface";


export const getProductMapper = async (product: Product):Promise<ProductDTO>=> {
  const productDTO: ProductDTO = {
    id: product.id,
    sku: product.sku,
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    createDate: product.createDate,
    updateDate: product.updateDate
  };
  return Promise.resolve(productDTO);
}




export const getProductsMapper = async (products: Product[], items: number ,page: number, ): Promise<ProductResponse>=> {
  const productsDTO: ProductDTO[] = [];
  products.forEach((product) => {
    productsDTO.push({
      id: product.id,
      sku: product.sku,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createDate: product.createDate,
      updateDate: product.updateDate
    });
  })
  const response : ProductResponse = {
    products: productsDTO,
    page,
    items
  }
  return Promise.resolve(response);
}