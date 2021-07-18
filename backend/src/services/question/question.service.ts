import { Injectable, Inject } from '@nestjs/common';
import { Question } from '../../entity/questions.entity';
@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_REPOSITORY')
    private quesitonRepository: typeof Question,
  ) { }

  async findAll(): Promise<Question[]> {
    return this.quesitonRepository.findAll<Question>();
  }
}
