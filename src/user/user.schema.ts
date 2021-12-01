import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  birthDate: Date;

  @Prop()
  phoneNumber: string;

  @Prop()
  mail: string;

  @Prop()
  address: string;

  @Prop()
  shoppingCart: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
