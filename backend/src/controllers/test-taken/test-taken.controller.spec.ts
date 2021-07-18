import { Test, TestingModule } from '@nestjs/testing';
import { TestTakenController } from './test-taken.controller';

describe('TestTakenController', () => {
  let controller: TestTakenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestTakenController],
    }).compile();

    controller = module.get<TestTakenController>(TestTakenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
