import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { createUserDTO } from 'src/app/modules/users/users.dto';
import { RoleEnum } from 'src/app/modules/users/users.interface';

@Injectable()
export class ValidateUserRoleAndStatusPipe implements PipeTransform {
  transform(value: createUserDTO): createUserDTO {
    const { roles, status } = value;

    if (roles.includes(RoleEnum.ADMIN)) {
      throw new BadRequestException('Role "admin" is not allowed');
    }

    if (status === 'active') {
      throw new BadRequestException('Status "active" is not allowed');
    }

    return value;
  }
}
