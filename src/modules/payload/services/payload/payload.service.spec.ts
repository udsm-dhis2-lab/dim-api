import { Test, TestingModule } from '@nestjs/testing';
import { PayloadService } from './payload.service';

describe('PayloadService', () => {
  let service: PayloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayloadService],
    }).compile();

    service = module.get<PayloadService>(PayloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
