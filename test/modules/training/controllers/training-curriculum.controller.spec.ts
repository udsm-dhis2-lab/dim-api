import { Test, TestingModule } from '@nestjs/testing';
import { TrainingCurriculumController } from './training-curriculum.controller';

describe('TrainingCurriculum Controller', () => {
  let controller: TrainingCurriculumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingCurriculumController],
    }).compile();

    controller = module.get<TrainingCurriculumController>(TrainingCurriculumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
