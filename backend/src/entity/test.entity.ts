import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Question } from './questions.entity';

@Table
export class Test extends Model {
  @Column({
    type: 'int',
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column
  total_number_questions: number;

  @Column
  passing: number;

  @Column({
    type: 'datetime',
    defaultValue: new Date(),
  })
  createdAt: Date;

  @HasMany(() => Question)
  questions: Question[];
}
