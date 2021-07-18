import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestTakenService } from 'src/services/test-taken/test-taken.service';

@Controller('test-taken')
export class TestTakenController {
  constructor(private testTakenService: TestTakenService) {}

  @Get('/list/:user_id')
  getUserAttempts(@Param('user_id') user_id: string) {
    return this.testTakenService.findUserAttempts(user_id);
  }

  @Post('/user/:user_id')
  createUserAttempt(@Param('user_id') user_id: string, @Body() data) {
    return this.testTakenService.recordUserAttempt(user_id, data);
  }
}
