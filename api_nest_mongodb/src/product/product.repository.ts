import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { product, ProductDocument } from "./product.schema";

@Injectable()
export class ProductRepository {
    constructor(@InjectModel(product.name) private ProductModel: Model<ProductDocument>) {}

    async findOne(productFilterQuery: FilterQuery<product>): Promise<product> {
        return this.ProductModel.findOne(productFilterQuery);
    }

    async find(productFilterQuery: FilterQuery<product>): Promise<product[]> {
        return this.ProductModel.find(productFilterQuery)
    }

    async create(product: product): Promise<product> {
        const newproduct = new this.ProductModel(product);
        return newproduct.save()
    }

    async findOneAndUpdate(productFilterQuery: FilterQuery<product>, product: Partial<product>): Promise<product> {
        return this.ProductModel.findOneAndUpdate(productFilterQuery, product, { new: true });
    }
}