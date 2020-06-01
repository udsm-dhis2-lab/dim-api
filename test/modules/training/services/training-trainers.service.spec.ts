import { Test, TestingModule } from '@nestjs/testing';
import { TrainingTrainersService } from './training-trainers.service';

describe('TrainingTrainersService', () => {
  let service: TrainingTrainersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingTrainersService],
    }).compile();

    service = module.get<TrainingTrainersService>(TrainingTrainersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
