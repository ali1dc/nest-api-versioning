import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { UserV1Dto } from './dto/user.v1.dto';
import { UserV2Dto } from './dto/user.v2.dto';
import { UserService } from './user.service';
import { API_VERSION } from 'app.enums';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Version([API_VERSION.VERSION_1, VERSION_NEUTRAL])
  @Get()
  findAllV1(): UserV1Dto[] {
    return this.userService.findAllV1()
  }

  @Version(API_VERSION.VERSION_2)
  @Get()
  findAllV2(): UserV2Dto[] {
    return this.userService.findAllV2()
  }
}
