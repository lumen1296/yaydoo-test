import { ProductDTO } from '@DTO/Product.dto';
import { Product } from '@entities/Product.entity';
import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductResponse } from '@shared/constants/productResponse.interface';
import { Between, Like, Repository } from 'typeorm';
import { getProductMapper, getProductsMapper } from '../mapper/product.mapper';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    async getProducts(items: number, page: number): Promise<ProductResponse> {
        let skip = 0;
        if (page&&items) {
            skip = page == 1 ? 0 : (page - 1) * items;

        }
        const [products, total] = await this.productRepository.findAndCount({
            order: {  },
            take: items ? items : 10,
            skip
        });
        if (products) {
            return Promise.resolve(getProductsMapper(products, items, page));
        }
        throw new NotFoundException();

    }

    async getProductById(id: number): Promise<ProductDTO> {
        const product = await this.productRepository.findOne({ id });
        if (product) {
            return Promise.resolve(await getProductMapper(product));
        }
        throw new NotFoundException();
    }



    async getProductByFilter(items: number, page: number, name: string, value1: string, value2?: string): Promise<ProductResponse> {
        let products, total;
        let skip = 0;
        let take = 0;
        if (page&&items) {
            skip = page == 1 ? 0 : (page - 1) * items;
            take = items;

        }

        if (name === 'price' && value2) {
            [products, total] = await this.productRepository.findAndCount({
                where: {
                    price: Between(value1, value2)
                },
                take,
                skip
            })
        }
        else {
            switch (name) {
                case 'sku': {
                    [products, total] = await this.productRepository.findAndCount({
                        where: {
                            sku: Like(`%${value1}%`)
                        },
                        take,
                        skip
                    })
                    break;
                }
                case 'name': {
                    [products, total] = await this.productRepository.findAndCount({
                        where: {
                            name: Like(`%${value1}%`)
                        },
                        take,
                        skip
                    })
                    break;
                }
                case 'quantity': {
                    [products, total] = await this.productRepository.findAndCount({
                        where: {
                            quantity: Like(`%${value1}%`)
                        },
                        take,
                        skip
                    })
                    break;
                }
                default: {
                    break;
                }
            }
        }

        if (products) {
            return Promise.resolve(getProductsMapper(products, items, page));
        }
        throw new NotFoundException();

    }
    

}
