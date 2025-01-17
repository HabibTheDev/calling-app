import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RoleEnum, StatusEnum } from './users.interface';

@Schema({ collection: 'users', timestamps: true })
export class UserEntity extends Document {
  @Prop({ type: String, required: true, unique: true })
  public email!: string;

  @Prop({ type: String, required: true })
  public username!: string;

  @Prop({ type: String, required: true })
  public password!: string;

  @Prop({ type: String, enum: RoleEnum, default: RoleEnum.CUSTOMER })
  public role!: RoleEnum;

  @Prop({ type: String, enum: StatusEnum, default: StatusEnum.ACTIVE })
  public status!: StatusEnum;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
