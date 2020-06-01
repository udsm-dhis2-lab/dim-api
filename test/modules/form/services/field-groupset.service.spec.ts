import { Test, TestingModule } from '@nestjs/testing';
import { FieldGroupsetService } from './field-groupset.service';

describe('FieldGroupsetService', () => {
  let service: FieldGroupsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldGroupsetService],
    }).compile();

    service = module.get<FieldGroupsetService>(FieldGroupsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
