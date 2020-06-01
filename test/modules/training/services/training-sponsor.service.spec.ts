import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSponsorService } from './training-sponsor.service';

describe('TrainingSponsorService', () => {
  let service: TrainingSponsorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingSponsorService],
    }).compile();

    service = module.get<TrainingSponsorService>(TrainingSponsorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
