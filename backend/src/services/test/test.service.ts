import { Injectable, Inject } from '@nestjs/common';
import { Test } from '../../entity/test.entity';
import { Question } from '../../entity/questions.entity';
@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_REPOSITORY')
    private testRepository: typeof Test,
  ) {}

  async findAll(): Promise<Test[]> {
    return this.testRepository.findAll<Test>();
  }

  async findById(id: string): Promise<Partial<Test>> {
    // TODO: Need To return values without answer and only required questions
    return this.testRepository.findOne({
      where: { id: id },
      include: Question,
    });
  }

  async create(data): Promise<Test> {
    return this.testRepository.create(data);
  }
}
