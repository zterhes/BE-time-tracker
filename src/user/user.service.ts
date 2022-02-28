import { Injectable, Logger } from '@nestjs/common';
import { UserData } from './interface/UserInterface';
import { getUserData } from './repository/UserRepository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  findById(id: string): UserData {
    const fetchedData = getUserData(id);
    return fetchedData;
  }
}
