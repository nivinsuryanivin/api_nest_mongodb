import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";
import { Document } from "mongoose";

export type  registrationDocument = registration & Document;

@Schema()
export class registration{
    @Prop()
    user_name:string;

    @Prop()
    email:string;

    @Prop()
    password: string;

}
export const registrationSchema = SchemaFactory.createForClass(registration)