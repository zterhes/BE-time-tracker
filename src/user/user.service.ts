import { Inject, Injectable, Logger } from '@nestjs/common';
import { NewUserDataDTO, UpdateUserDTO, UserData } from './interface/user.model';
import UserRepository from './repository/user.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private userRepository: UserRepository) { }

  createUser(newUserData: NewUserDataDTO) {
    const result = this.userRepository.createNewUser(newUserData)
    return result
  }

  findById(id: string) {
    const fetchedData = this.userRepository.getUserData(id);
    return fetchedData;
  }

  update(updateUserData: UpdateUserDTO) {
    const result = this.userRepository.updateUserData(updateUserData)
    return result
  }
}
