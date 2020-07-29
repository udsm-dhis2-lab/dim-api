import { Test, TestingModule } from '@nestjs/testing';
import { EventDataValueService } from './event-data-value.service';

describe('EventDataValueService', () => {
  let service: EventDataValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventDataValueService],
    }).compile();

    service = module.get<EventDataValueService>(EventDataValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
