import { ProductDTO } from '@DTO/Product.dto';
import { Product } from '@entities/Product.entity';
import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { getProductMapper, getProductsMapper } from '../mapper/product.mapper';
import {FilterProduct} from '@shared/constants/filterProduct.interface'

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
            return Promise.resolve(await getProductMapper(product));
        }
        throw new NotFoundException();;
      }



      async getProductByFilter(filter: FilterProduct): Promise<ProductDTO[]> {
        let products;
        if(filter.name==='price'){
            products = await this.productRepository.find({
                where: {
                    price: Between(filter.value1,filter.value2)
                },
                take: filter.items ? filter.items : 10,
                skip: filter.page && filter.items? filter.page * filter.items : 0
            })
        }
        else{
            switch(filter.name) { 
                case 'sku': { 
                    products = await this.productRepository.find({
                        where: {
                            sku: filter.value1
                        },
                        take: filter.items ? filter.items : 10,
                        skip: filter.page && filter.items? filter.page * filter.items : 0
                    })
                   break; 
                } 
                case 'name': { 
                    products = await this.productRepository.find({
                        where: {
                            name: filter.value1
                        },
                        take: filter.items ? filter.items : 10,
                        skip: filter.page && filter.items? filter.page * filter.items : 0
                    })
                   break; 
                } 
                case 'quantity': { 
                    products = await this.productRepository.find({
                        where: {
                            quantity: filter.value1
                        },
                        take: filter.items ? filter.items : 10,
                        skip: filter.page && filter.items? filter.page * filter.items : 0
                    })
                   break; 
                } 
                default: { 
                   break; 
                } 
             }
        }

        if (products) {
            return Promise.resolve(await getProductsMapper(products));
        }
        throw new NotFoundException();

    }

}
