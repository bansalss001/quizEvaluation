import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { TestTaken } from './testTaken.entity';
import { Question } from './questions.entity';

@Table
export class Attempts extends Model {
  @Column({
    type: 'int',
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => TestTaken)
  @Column({
    type: 'int',
    references: {
      model: 'TestTakens',
      key: 'id',
    },
  })
  test_taken_id: number;

  @ForeignKey(() => Question)
  @Column({
    type: 'int',
    references: {
      model: 'Questions',
      key: 'id',
    },
  })
  question_id: number;

  @Column
  selection: number;

  @Column({
    type: 'datetime',
    defaultValue: new Date(),
  })
  createdAt: Date;
}
