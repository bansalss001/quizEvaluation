import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo
} from 'sequelize-typescript';

import { Test } from './test.entity';
import { User } from './user.entity';
import { Attempts } from './attempts.entity';

@Table
export class TestTaken extends Model {
  @Column({
    type: 'int',
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Test)
  @Column({
    type: 'int',
    references: {
      model: 'Tests',
      key: 'id',
    },
  })
  test_id: number;

  @ForeignKey(() => User)
  @Column({
    type: 'int',
    references: {
      model: 'Users',
      key: 'id',
    },
  })
  user_id: number;

  @Column
  result: number;

  @Column
  status: string;

  @Column
  total_duration: string;

  @Column({
    type: 'datetime',
    defaultValue: new Date(),
  })
  createdAt: Date;

  @HasMany(() => Attempts)
  attempts: Attempts[];

  @BelongsTo(() => Test)
  test: Test;
}
