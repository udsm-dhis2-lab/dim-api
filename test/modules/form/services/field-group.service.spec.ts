import { Test, TestingModule } from '@nestjs/testing';
import { FieldGroupService } from './field-group.service';

describe('FieldGroupService', () => {
  let service: FieldGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldGroupService],
    }).compile();

    service = module.get<FieldGroupService>(FieldGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
