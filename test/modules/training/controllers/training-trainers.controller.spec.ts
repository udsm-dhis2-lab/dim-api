import { Test, TestingModule } from '@nestjs/testing';
import { TrainingTrainersController } from './training-trainers.controller';

describe('TrainingTrainers Controller', () => {
  let controller: TrainingTrainersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingTrainersController],
    }).compile();

    controller = module.get<TrainingTrainersController>(TrainingTrainersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
