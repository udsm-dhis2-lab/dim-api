import { Test, TestingModule } from '@nestjs/testing';
import { FormVisibleFieldsService } from './form-visible-fields.service';

describe('FormVisibleFieldsService', () => {
  let service: FormVisibleFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormVisibleFieldsService],
    }).compile();

    service = module.get<FormVisibleFieldsService>(FormVisibleFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
