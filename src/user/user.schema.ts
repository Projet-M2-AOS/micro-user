import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: ObjectId;

  @Prop()
  @ApiProperty({ type: String, format: 'mongo-id' })
  firstName: string;

  @Prop()
  @ApiProperty({ type: String })
  lastName: string;

  @Prop()
  @ApiProperty({ type: Date })
  birthDate: Date;

  @Prop()
  @ApiProperty({ type: String })
  phoneNumber: string;

  @Prop()
  @ApiProperty({ type: String })
  mail: string;

  @Prop()
  @ApiProperty({ type: String })
  address: string;

  @Prop()
  @ApiProperty({ type: Array })
  shoppingCart: ObjectId[];

  @Prop()
  @ApiProperty({ type: String })
  password: string;

  @Prop()
  @ApiProperty({ type: String })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
