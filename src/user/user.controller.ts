import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { UserV1Dto } from './dto/user.v1.dto';
import { UserV2Dto } from './dto/user.v2.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Version(['1', VERSION_NEUTRAL])
  @Get()
  findAllV1(): UserV1Dto[] {
    return this.userService.findAllV1()
  }

  @Version('2')
  @Get()
  findAllV2(): UserV2Dto[] {
    return this.userService.findAllV2()
  }
}
