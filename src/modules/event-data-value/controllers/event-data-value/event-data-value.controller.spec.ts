import { Test, TestingModule } from '@nestjs/testing';
import { EventDataValueController } from './event-data-value.controller';

describe('EventDataValue Controller', () => {
  let controller: EventDataValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventDataValueController],
    }).compile();

    controller = module.get<EventDataValueController>(EventDataValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
