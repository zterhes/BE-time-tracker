import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './shema/user.shema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema:UserShema}])],
    controllers:[UserController],
    providers: [UserService]
})
export class UserModule {}
