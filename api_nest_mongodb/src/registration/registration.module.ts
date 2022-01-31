import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationController } from './registration.controller';
import { RegRepository } from './registration.repository';
import { registration, registrationSchema } from './registration.schema';
import { RegistrationService } from './registration.service';

@Module({
  imports:[MongooseModule.forFeature([{name:registration.name, schema:registrationSchema,}])],
  controllers: [RegistrationController],
  providers: [RegistrationService,RegRepository]
})
export class RegistrationModule {}
