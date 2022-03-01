import { Inject, Injectable, Logger } from '@nestjs/common';
import { NewUserDataDTO, UserData } from './interface/user.model';
import UserRepository from './repository/user.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private userRepository: UserRepository) { }

  createUser(newUserData: NewUserDataDTO) {
    const result = this.userRepository.createNewUser(newUserData)
    return result
  }

  findById(id: string): UserData {
    const fetchedData = this.userRepository.getUserData(id);
    return fetchedData;
  }
}
