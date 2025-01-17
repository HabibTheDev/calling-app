import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { createUserDTO } from './users.dto';
import { UserService } from './users.service';
import { UserEntity } from './users.entity';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('User Registration')
  @ApiOperation({ summary: 'New User Registration' })
  @HttpCode(200)
  @ApiOkResponse({ description: 'Ok' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Post('register')
  async register(@Body() createUserDto: createUserDTO): Promise<UserEntity> {
    return await this.userService.createUser(createUserDto);
  }
}
