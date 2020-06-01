import { Test, TestingModule } from '@nestjs/testing';
import { DataValueService } from './data-value.service';

describe('DataValueService', () => {
  let service: DataValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataValueService],
    }).compile();

    service = module.get<DataValueService>(DataValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
