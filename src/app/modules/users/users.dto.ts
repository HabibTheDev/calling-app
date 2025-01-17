import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEnum } from 'class-validator';
import { RoleEnum, StatusEnum } from './users.interface';

export class getUserIdParams {
  @ApiProperty({ description: '', required: true })
  @IsUUID()
  readonly id: string;
}

export class createUserDTO {
  @ApiProperty({ description: '', required: true })
  @IsUUID()
  readonly id: string;

  @ApiProperty({ description: 'Email', required: true })
  @IsString()
  readonly email: string;

  @ApiProperty({ description: 'Username', required: true })
  @IsString()
  readonly username: string;

  @ApiProperty({ description: 'Password', required: true })
  @IsString()
  public password: string;

  @ApiProperty({ description: 'Roles', required: true })
  @IsEnum(RoleEnum, { each: true })
  public roles: RoleEnum[];

  @ApiProperty({ description: 'Status', required: true })
  @IsEnum(StatusEnum)
  public status: StatusEnum;
}
