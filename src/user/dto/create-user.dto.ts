import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  mail: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsArray()
  shoppingCart?: ObjectId[];
}
