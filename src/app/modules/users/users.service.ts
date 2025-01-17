import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from './users.entity';
import { createUserDTO } from './users.dto';
import { RoleEnum } from './users.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserEntity>,
  ) {}

  async createUser(createUserDto: createUserDTO): Promise<UserEntity> {
    if (!createUserDto.email) {
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    }
    if (createUserDto.roles.includes(RoleEnum.ADMIN)) {
      throw new HttpException(
        `You can't assign yourself as a admin`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }
}
