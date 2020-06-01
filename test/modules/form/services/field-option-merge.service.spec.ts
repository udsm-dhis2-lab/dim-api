import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionMergeService } from './field-option-merge.service';

describe('FieldOptionMergeService', () => {
  let service: FieldOptionMergeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldOptionMergeService],
    }).compile();

    service = module.get<FieldOptionMergeService>(FieldOptionMergeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
