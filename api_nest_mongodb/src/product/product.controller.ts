import { Controller, Post,Body, Get } from '@nestjs/common';
import { CreateProductdto } from './product.dto';
import { product } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
 constructor(private readonly pservice : ProductService)
 {

 }
 @Post('insert_product')
  async createUser(@Body() CreateProductdto: CreateProductdto): Promise<product> {
      return await this.pservice.createProduct(CreateProductdto.pro_id,CreateProductdto.pro_name,CreateProductdto.pro_price)
  }

  @Get('getall_product')
  async getproduct():Promise<product[]> {
    return await this.pservice.getproduct();
  }
}
