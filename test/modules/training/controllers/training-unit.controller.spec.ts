import { Test, TestingModule } from '@nestjs/testing';
import { TrainingUnitController } from './training-unit.controller';

describe('TrainingUnit Controller', () => {
  let controller: TrainingUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingUnitController],
    }).compile();

    controller = module.get<TrainingUnitController>(TrainingUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
