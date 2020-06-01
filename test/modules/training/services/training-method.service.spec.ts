import { Test, TestingModule } from '@nestjs/testing';
import { TrainingMethodService } from './training-method.service';

describe('TrainingMethodService', () => {
  let service: TrainingMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingMethodService],
    }).compile();

    service = module.get<TrainingMethodService>(TrainingMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
