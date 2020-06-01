import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSectionController } from './training-section.controller';

describe('TrainingSection Controller', () => {
  let controller: TrainingSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSectionController],
    }).compile();

    controller = module.get<TrainingSectionController>(TrainingSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
