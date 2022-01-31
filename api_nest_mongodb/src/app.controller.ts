import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('register_page')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root()
  {
    return;
  }
}
