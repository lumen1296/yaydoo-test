import { Product} from "@entities/Product.entity";
import { ProductDTO } from "@DTO/Product";


export const getProductByIdMapper = async (product: Product): Promise<ProductDTO> => {
  const productDTO : ProductDTO ={
    id: product.id,
    sku: product.sku,
    name: product.name,
    price: product.price,
    quantity: product.quantity,

  };

  return productDTO;
}


export const getProductsMapper = async (products: Array<Product>): Promise<ProductDTO[]> => {
  const productsDTO : ProductDTO [] = [];
  products.forEach((product)=>{
    productsDTO.push({ id: product.id,
      sku: product.sku,
      name: product.name,
      price: product.price,
      quantity: product.quantity,});
  })
  return productsDTO;
}