import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  public users: UserDto[] = [
    {
      id: 1,
      user_name: 'jon',
      email: 'jon@gmail.com'
    },
    {
      id: 2,
      user_name: 'steve',
      email: 'steve@yahoo.com'
    },
    {
      id: 3,
      user_name: 'megan',
      email: 'megan@msn.com'
    }
  ]

  findAll(): UserDto[] {
    return this.users
  }
}
