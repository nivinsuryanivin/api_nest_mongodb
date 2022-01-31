import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";
import { Document } from "mongoose";

export type  ProductDocument = product & Document;

@Schema()
export class product{
    @Prop()
    pro_id:string;

    @Prop()
    pro_name:string;

    @Prop()
    pro_price: number;

}
export const ProductSchema = SchemaFactory.createForClass(product)