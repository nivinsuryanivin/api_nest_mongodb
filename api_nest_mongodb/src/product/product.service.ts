import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { product } from './product.schema';

@Injectable()
export class ProductService {

    constructor(private readonly productrepo : ProductRepository)
    {

    }
    async getUserById(pro_id: string): Promise<product> {
        return this.productrepo.findOne({ pro_id })
    }

    async createProduct(pro_id: string, pro_name: string, pro_price: number): Promise<product> {
        return await this.productrepo.create({
            pro_id,
            pro_name,
            pro_price
        })
    }
    async getproduct() : Promise<product[]>
    {
        return this.productrepo.find({});

    }
    
}
