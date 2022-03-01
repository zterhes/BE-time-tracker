import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewUserDataDTO, UserData } from './interface/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get(':id')
  findOne(@Param() params): UserData {
    return this.userService.findById(params.id);
  }

  @Post()
  createNewUser(@Body() newUserDTO: NewUserDataDTO) {
    const result = this.userService.createUser(newUserDTO)
    return result
  }
}
