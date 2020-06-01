import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionGroupsetService } from './field-option-groupset.service';

describe('FieldOptionGroupsetService', () => {
  let service: FieldOptionGroupsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldOptionGroupsetService],
    }).compile();

    service = module.get<FieldOptionGroupsetService>(FieldOptionGroupsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
