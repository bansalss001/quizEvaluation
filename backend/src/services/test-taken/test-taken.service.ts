import { Injectable, Inject } from '@nestjs/common';
import { TestTaken } from '../../entity/testTaken.entity';
import { Attempts } from '../../entity/attempts.entity';
@Injectable()
export class TestTakenService {
  constructor(
    @Inject('TEST_TAKEN_REPOSITORY')
    private testTakenRepository: typeof TestTaken,
    @Inject('ATTEMPT_REPOSITORY')
    private attemptRepository: typeof Attempts,
  ) { }

  async findAll(): Promise<TestTaken[]> {
    return this.testTakenRepository.findAll<TestTaken>();
  }

  async findUserAttempts(user_id: string): Promise<TestTaken[]> {
    return this.testTakenRepository.findAll({
      where: { user_id: user_id },
      include: Attempts,
    });
  }

  async recordUserAttempt(user_id: string, data): Promise<TestTaken> {
    // TODO: Need to handle validations for test creations
    const testTaken: TestTaken = await this.testTakenRepository.create({
      ...data,
      user_id: user_id,
    });
    data.attempts?.forEach((element) => {
      return this.attemptRepository.create({
        ...element,
        test_taken_id: testTaken.id,
      });
    });

    return testTaken;
  }

  async findById(id: string) {
    return this.testTakenRepository.findOne({
      where: { id: id },
      include: Attempts,
    });
  }
}
