import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionChildrenService } from './field-option-children.service';

describe('FieldOptionChildrenService', () => {
  let service: FieldOptionChildrenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldOptionChildrenService],
    }).compile();

    service = module.get<FieldOptionChildrenService>(FieldOptionChildrenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
