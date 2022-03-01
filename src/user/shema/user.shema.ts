import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {

  @Prop()
  name: string;

  @Prop()
  img: string;

}

export const UserShema = SchemaFactory.createForClass(User);
