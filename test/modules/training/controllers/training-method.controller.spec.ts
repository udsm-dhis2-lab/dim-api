import { Test, TestingModule } from '@nestjs/testing';
import { TrainingMethodController } from './training-method.controller';

describe('TrainingMethod Controller', () => {
  let controller: TrainingMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingMethodController],
    }).compile();

    controller = module.get<TrainingMethodController>(TrainingMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
