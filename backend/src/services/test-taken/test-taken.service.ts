import { Injectable, Inject } from '@nestjs/common';
import { TestTaken } from '../../entity/testTaken.entity';

@Injectable()
export class TestTakenService {
  constructor(
    @Inject('TEST_TAKEN_REPOSITORY')
    private testTakenRepository: typeof TestTaken,
  ) {}

  async findAll(): Promise<TestTaken[]> {
    return this.testTakenRepository.findAll<TestTaken>();
  }
}
