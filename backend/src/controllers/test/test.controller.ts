import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestService } from '../../services/test/test.service';
import { QuestionService } from '../../services/question/question.service';

@Controller('test')
export class TestController {
  constructor(
    private testService: TestService,
    private questionService: QuestionService,
  ) {}

  @Get('list')
  getAllTest() {
    return this.testService.findAll();
  }

  @Get(':id')
  getTest(@Param('id') id: string) {
    return this.testService.findById(id);
  }

  @Post()
  createTest(@Body() data) {
    return this.testService.create(data);
  }
}
