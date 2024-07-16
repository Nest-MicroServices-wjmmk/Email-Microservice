import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/interfaces/user';

@Injectable()
export class MailsService {
  
  constructor(private readonly mailerService: MailerService) {}
  
  async sendUserConfirmation(user: User) {
    const url = `$https://www.linkedin.com/in/william~mosquera/`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Revisa mí linkedin por favor.',
      template: './welcome',
      context: {
        name: user.name,
        url,
      }
    });  
  }
}
