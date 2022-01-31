import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb://localhost/test_demo'), RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
