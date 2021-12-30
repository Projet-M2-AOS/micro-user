import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsArray, IsDateString, IsUppercase } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({required:false})
  firstName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({required:false})
  lastName?: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty({required:false})
  birthDate?: Date;

  @IsOptional()
  @IsString()
  @ApiProperty({required:false})
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({required:false})
  mail?: string;

  @IsOptional()
  @ApiProperty({required:false})
  address?: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({required:false})
  shoppingCart?: ObjectId[];

  @IsOptional()
  @IsString()
  @ApiProperty()
  password: string;

  @IsOptional()
  @IsString()
  @IsUppercase()
  @ApiProperty()
  role: string;
}
