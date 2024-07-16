import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';
import { MailsService } from './mails/mails.service';

@Injectable()
export class AppService {

  constructor(private readonly mailService: MailsService) { }

  private createUser(user: User): User {
    return user;
  }

  async createUserAndSendEmail(user: User): Promise<any> {
    const newUser = this.createUser(user);
    try {
      await this.mailService.sendUserConfirmation(newUser);
      return { message: 'Operation is Done.'}
    } catch (err) {
       throw new Error(err);
    }
  }
}
