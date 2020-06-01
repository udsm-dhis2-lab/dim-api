import { Test, TestingModule } from '@nestjs/testing';
import { TrainingCurriculumService } from './training-curriculum.service';

describe('TrainingCurriculumService', () => {
  let service: TrainingCurriculumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingCurriculumService],
    }).compile();

    service = module.get<TrainingCurriculumService>(TrainingCurriculumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
