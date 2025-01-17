import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEnum, StatusEnum } from './users.interface';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({
    type: 'varchar',
    length: 255,
    select: true,
    unique: true,
    nullable: false,
  })
  public email!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public username!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public password!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public role!: RoleEnum;

  @Column({ type: 'varchar', length: 255, nullable: true })
  public status!: StatusEnum;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    select: true,
    default: 'CURRENT_TIMESTAMP',
  })
  public createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    select: true,
    default: 'CURRENT_TIMESTAMP',
  })
  public updatedAt!: Date;
}
