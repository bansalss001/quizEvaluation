import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Test } from './test.entity';

@Table
export class Question extends Model {
  @Column({
    type: 'int',
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  question: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column
  option1: string;

  @Column
  option2: string;

  @Column
  option3: string;

  @Column
  option4: string;

  @Column
  answer: number;

  @ForeignKey(() => Test)
  @Column({
    type: 'int',
    references: {
      model: 'Tests',
      key: 'id',
    },
  })
  test_id: number;

  @Column({
    type: 'datetime',
    defaultValue: new Date(),
  })
  createdAt: Date;
}
