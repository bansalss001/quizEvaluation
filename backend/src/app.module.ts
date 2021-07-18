import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { databaseProviders } from './providers/database.provider';
import { UserService } from './services/user/user.service';
import { ConfigModule } from '@nestjs/config';
import { TestService } from './services/test/test.service';
import { QuestionService } from './services/question/question.service';
import { TestTakenService } from './services/test-taken/test-taken.service';
import { AttemptsService } from './services/attempts/attempts.service';
import { TestController } from './controllers/test/test.controller';
import { TestTakenController } from './controllers/test-taken/test-taken.controller';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UserController, TestController, TestTakenController],
  providers: [AppService, ...databaseProviders, UserService, TestService, QuestionService, TestTakenService, AttemptsService],
})
export class AppModule {}
