import { Sequelize } from 'sequelize-typescript';
import { User } from '../entity/user.entity';
import { Test } from '../entity/test.entity';
import { Question } from '../entity/questions.entity';
import { TestTaken } from '../entity/testTaken.entity';
import { Attempts } from '../entity/attempts.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.MYSQL_URL, {});
      sequelize.addModels([User, Test, Question, TestTaken, Attempts]);
      await sequelize.sync();
      return sequelize;
    },
  },
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
