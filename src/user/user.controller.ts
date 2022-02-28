import { Controller, Get, Param } from '@nestjs/common';
import { UserData } from './interface/UserInterface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  findOne(@Param() params): UserData {
    return this.userService.findById(params.id);
  }
}
