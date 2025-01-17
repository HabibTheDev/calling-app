import { Body, Controller, Post } from '@nestjs/common';
import { createUserDTO } from './users.dto';
import { UserService } from './users.service';
import { UserEntity } from './users.entity';
import { ValidateUserRoleAndStatusPipe } from 'src/pipes/ValidateUserRoleAndStatusPipe';
import { ControllerDecorator } from 'src/app/decorator/controller.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ControllerDecorator(
    ['User Registration'],
    'New User Registration',
    'Ok',
    'Bad Request',
    'Internal Server Error',
  )
  async register(
    @Body(new ValidateUserRoleAndStatusPipe()) createUserDTO: createUserDTO,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserDTO);
  }
}
