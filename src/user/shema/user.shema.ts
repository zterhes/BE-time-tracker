import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User {

  @Prop()
  name: string;

  @Prop()
  img: string;
}

export const UserShema = SchemaFactory.createForClass(User);
