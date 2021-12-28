import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({minLength: 1, maxLength: 50})
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({minLength: 1, maxLength: 50})
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  birthDate: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  mail: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({required:false})
  shoppingCart?: ObjectId[];
}
