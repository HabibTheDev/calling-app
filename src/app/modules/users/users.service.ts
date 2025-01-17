import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from './users.entity';
import { createUserDTO } from './users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserEntity>,
  ) {}

  async createUser(createUserDto: createUserDTO): Promise<UserEntity> {
    if (!createUserDto.email) {
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    }
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }
}
