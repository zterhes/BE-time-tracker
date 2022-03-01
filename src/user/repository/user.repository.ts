import data from '../../constants/data.json';
import { User } from '../shema/user.shema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData } from '../interface/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }


  getUserData = (id: string): UserData => {
    const output: UserData = {
      id: data.userdata.id,
      name: data.userdata.name,
      img: data.userdata.img,
    };

    return output;
  };

  async createNewUser(newUserData: User) {
    const newUser = new this.userModel({
      name: newUserData.name,
      img: newUserData.img
    })
    const result = await newUser.save()
    return result
  }
}
