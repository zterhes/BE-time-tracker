import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NewUserDataDTO, UpdateUserDTO } from './interface/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findById(params.id);
  }

  @Post()
  createNewUser(@Body() newUserDTO: NewUserDataDTO) {
    const result = this.userService.createUser(newUserDTO)
    return result
  }

  @Put()
  updateUserData(@Body() updateUserDTO: UpdateUserDTO) {
    return this.userService.update(updateUserDTO)
  }
}
