import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSectionService } from './training-section.service';

describe('TrainingSectionService', () => {
  let service: TrainingSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingSectionService],
    }).compile();

    service = module.get<TrainingSectionService>(TrainingSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
