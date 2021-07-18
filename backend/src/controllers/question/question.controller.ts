import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from '../../services/question/question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  createTest(@Body() data) {
    return this.questionService.create(data);
  }
}
