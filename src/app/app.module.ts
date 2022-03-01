import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from '../config/config.json'

@Module({
  imports: [MongooseModule.forRoot(config.database.connection_string), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
