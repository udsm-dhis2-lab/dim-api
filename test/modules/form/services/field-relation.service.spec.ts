import { Test, TestingModule } from '@nestjs/testing';
import { FieldRelationService } from './field-relation.service';

describe('FieldRelationService', () => {
  let service: FieldRelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldRelationService],
    }).compile();

    service = module.get<FieldRelationService>(FieldRelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
