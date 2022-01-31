import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { product } from './product.schema';
import { ProductService } from './product.service';
import { ProductSchema } from './product.schema';
import { ProductRepository } from './product.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:product.name, schema:ProductSchema,}])],
  controllers: [ProductController],
  providers: [ProductService,ProductRepository]
})
export class ProductModule {}
