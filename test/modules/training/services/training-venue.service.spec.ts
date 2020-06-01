import { Test, TestingModule } from '@nestjs/testing';
import { TrainingVenueService } from './training-venue.service';

describe('TrainingVenueService', () => {
  let service: TrainingVenueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingVenueService],
    }).compile();

    service = module.get<TrainingVenueService>(TrainingVenueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
