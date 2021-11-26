import { ProductDTO } from '@DTO/Product';
import { Product } from '@entities/Product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getProductByIdMapper, getProductsMapper } from '../mapper/product.mapper';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    async getProducts(): Promise<ProductDTO[]>{
        const products = await this.productRepository.find();
        if (products) {
            return Promise.resolve(await getProductsMapper(products));
        }
        throw new NotFoundException();

      }

    async getProductById(id: number): Promise<ProductDTO>{
        const product = await this.productRepository.findOne({ id });
        if (product) {
            return Promise.resolve(await getProductByIdMapper(product));
        }
        throw new NotFoundException();;
      }

}
