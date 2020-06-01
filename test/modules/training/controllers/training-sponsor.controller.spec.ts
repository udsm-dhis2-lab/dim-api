import { Test, TestingModule } from '@nestjs/testing';
import { TrainingSponsorController } from './training-sponsor.controller';

describe('TrainingSponsor Controller', () => {
  let controller: TrainingSponsorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingSponsorController],
    }).compile();

    controller = module.get<TrainingSponsorController>(TrainingSponsorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
