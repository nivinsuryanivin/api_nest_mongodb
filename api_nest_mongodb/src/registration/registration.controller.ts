import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { Registrationdto } from './registration.dto';
import { registration } from './registration.schema';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
    constructor(private readonly regservice : RegistrationService)
    {
   
    }
    @Get('register_page')
    root(){
       return; 
    }
    @Post('insert_user')

    async createUsers(@Body() Createregdto: Registrationdto): Promise<registration> {
        return await this.regservice.addUser(Createregdto.user_name,Createregdto.email,Createregdto.password)
    }
    
}
