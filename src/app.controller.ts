import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('sendEmail')
  notificationUserWhitEmail(@Body() user: User) {
    return this.appService.createUserAndSendEmail(user);
  }
}
