import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';
import * as bcrypt from 'bcrypt';
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
export const UserModel = model<UserEntity>('User', UserSchema);

// Pre-save hook to check if email already exists
UserSchema.pre<UserEntity>('save', async function (next) {
  const existingUser = await UserModel.findOne({ email: this.email });

  if (existingUser) {
    throw new Error(`Email ${this.email} already exists`);
  }

  // Hash password if modified
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

export type UserDocument = UserEntity;
