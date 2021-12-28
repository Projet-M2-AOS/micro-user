import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
  Put,
  ParseArrayPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import { ObjectId } from 'mongoose';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('micro-users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create users'
  })
  @ApiBody({type: [CreateUserDto]})
  @ApiResponse({status: HttpStatus.OK, type: [User], description: 'The users are created'})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid schema supplied'})  
  create(
    @Body(new ParseArrayPipe({ items: CreateUserDto }))
    createUserDtos: CreateUserDto[],
  ) {
    try {
      return this.userService.createMany(createUserDtos);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all users'
  })
  @ApiResponse({status: HttpStatus.OK, type: [User]})
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get user by id'
  })
  @ApiParam({
      name: 'id',
      description: 'The id of the user you want to get',
      required: true,
      schema: {
          type: 'string',
          format: 'mongo-id'
      }
  })
  @ApiResponse({status: HttpStatus.OK, type: User})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid id supplied'})
  @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'User not found'})
  async findOne(@Param('id') id: ObjectId): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Update one user'
  })
  @ApiParam({
      name: 'id',
      description: 'The id of the user you want to update',
      required: true,
      schema: {
          type: 'string',
          format: 'mongo-id'
      }
  })
  @ApiResponse({status: HttpStatus.OK, type: User, description: 'The user updated'})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid schema supplied'})
  @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'User not found'})
  async update(
    @Param('id') id: ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    let user: User;
    try {
      user = await this.userService.findOne(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    try {
      await this.userService.update(id, updateUserDto);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }

    return await this.userService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete one user'
  })
  @ApiParam({
      name: 'id',
      description: 'The id of the user you want to delete',
      required: true,
      schema: {
          type: 'string',
          format: 'mongo-id'
      }
  })
  @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'Successfully deleted'})
  @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'User not found'})
  @ApiResponse({status: HttpStatus.BAD_REQUEST, description: 'Invalid id supplied'})
  async remove(@Param('id') id: ObjectId) {
    let user: User;
    try {
      user = await this.userService.findOne(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.userService.remove(id);
  }
}
