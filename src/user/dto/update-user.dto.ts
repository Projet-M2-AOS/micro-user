import { IsDate, IsOptional, IsString, IsArray } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsDate()
  birthDate?: Date;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  mail?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  @IsArray()
  shoppingCart?: ObjectId[];
}
