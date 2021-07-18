import { Test, TestingModule } from '@nestjs/testing';
import { TestTakenService } from './test-taken.service';

describe('TestTakenService', () => {
  let service: TestTakenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestTakenService],
    }).compile();

    service = module.get<TestTakenService>(TestTakenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
