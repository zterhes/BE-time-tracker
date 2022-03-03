import { User } from '../shema/user.shema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { NewUserDataDTO, UpdateUserDTO, UserData } from '../interface/user.model';

@Injectable()
export default class UserRepository {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }


  async getUserData(id: string) {
    const result = await this.userModel.findById(id).exec();
    return result;
  };

  async createNewUser(newUserData: NewUserDataDTO) {
    const newUser = new this.userModel({
      name: newUserData.name,
      img: newUserData.img
    })
    const result = await newUser.save()
    return result._id;
  }

  async updateUserData(updateUserData: UpdateUserDTO) {
    const result = this.userModel.findByIdAndUpdate(updateUserData.id, updateUserData.updatedFields)
    return result
  }
}
