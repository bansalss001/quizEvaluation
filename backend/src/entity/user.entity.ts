import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
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
    type: 'datetime',
    defaultValue: new Date(),
  })
  createdAt: Date;
}
