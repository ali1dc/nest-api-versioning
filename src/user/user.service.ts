import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserV1Dto } from './dto/user.v1.dto';
import { UserV2Dto } from './dto/user.v2.dto';

@Injectable()
export class UserService {
  public users_v1: UserV1Dto[] = [
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
  private users_v2: UserV2Dto[] = [
    {
      user_name: 'jon',
      email: 'jon@gmail.com',
      phone: '777-777-7777',
    },
    {
      user_name: 'steve',
      email: 'steve@yahoo.com',
      phone: '666-666-6666'
    },
    {
      user_name: 'megan',
      email: 'megan@msn.com',
      phone: '555-555-5555'
    }
  ]

  findAllV1(): UserDto[] {
    return this.users_v1
  }

  findAllV2(): UserV2Dto[] {
    return this.users_v2
  }
}
