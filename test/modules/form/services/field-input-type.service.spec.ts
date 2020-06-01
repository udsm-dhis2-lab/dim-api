import { Test, TestingModule } from '@nestjs/testing';
import { FieldInputTypeService } from './field-input-type.service';

describe('FieldInputTypeService', () => {
  let service: FieldInputTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldInputTypeService],
    }).compile();

    service = module.get<FieldInputTypeService>(FieldInputTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
