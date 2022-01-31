import { Injectable } from '@nestjs/common';
import { RegRepository } from './registration.repository';
import { registration } from './registration.schema';

@Injectable()
export class RegistrationService {
    constructor(private readonly productrepo : RegRepository){}


    async addUser(user_name: string, email: string, password: string): Promise<registration> {
        return await this.productrepo.create({
            user_name,
            email,
            password
        })
}
}
