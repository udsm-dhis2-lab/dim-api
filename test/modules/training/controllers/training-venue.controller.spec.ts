import { Test, TestingModule } from '@nestjs/testing';
import { TrainingVenueController } from './training-venue.controller';

describe('TrainingVenue Controller', () => {
  let controller: TrainingVenueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingVenueController],
    }).compile();

    controller = module.get<TrainingVenueController>(TrainingVenueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
