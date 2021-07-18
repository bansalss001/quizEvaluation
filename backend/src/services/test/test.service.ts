import { Injectable, Inject } from '@nestjs/common';
import { Test } from '../../entity/test.entity';
@Injectable()
export class TestService {
  constructor(
    @Inject('TEST_REPOSITORY')
    private testRepository: typeof Test,
  ) {}

  async findAll(): Promise<Test[]> {
    return this.testRepository.findAll<Test>();
  }

  async findById(id: string): Promise<Test> {
    return this.testRepository.findOne({ where: { id: id } });
  }

  async create(data): Promise<Test> {
    return this.testRepository.create(data);
  }
}
