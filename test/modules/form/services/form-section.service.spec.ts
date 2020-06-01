import { Test, TestingModule } from '@nestjs/testing';
import { FormSectionService } from './form-section.service';

describe('FormSectionService', () => {
  let service: FormSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormSectionService],
    }).compile();

    service = module.get<FormSectionService>(FormSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
