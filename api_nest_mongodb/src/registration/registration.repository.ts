import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { registration, registrationDocument } from "./registration.schema";


@Injectable()
export class RegRepository {
    constructor(@InjectModel(registration.name) private RegModel: Model<registrationDocument>) {}

    async findOne(productFilterQuery: FilterQuery<registration>): Promise<registration> {
        return this.RegModel.findOne(productFilterQuery);
    }

    async find(productFilterQuery: FilterQuery<registration>): Promise<registration[]> {
        return this.RegModel.find(productFilterQuery)
    }

    async create(registration: registration): Promise<registration> {
        const newproduct = new this.RegModel(registration);
        return newproduct.save()
    }

    async findOneAndUpdate(productFilterQuery: FilterQuery<registration>, registration: Partial<registration>): Promise<registration> {
        return this.RegModel.findOneAndUpdate(productFilterQuery, registration, { new: true });
    }
}