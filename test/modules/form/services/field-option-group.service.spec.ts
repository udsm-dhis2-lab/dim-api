import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionGroupService } from './field-option-group.service';

describe('FieldOptionGroupService', () => {
  let service: FieldOptionGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldOptionGroupService],
    }).compile();

    service = module.get<FieldOptionGroupService>(FieldOptionGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
