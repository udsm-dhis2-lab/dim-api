import { Test, TestingModule } from '@nestjs/testing';
import { FormFieldMemberService } from './form-field-member.service';

describe('FormFieldMemberService', () => {
  let service: FormFieldMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormFieldMemberService],
    }).compile();

    service = module.get<FormFieldMemberService>(FormFieldMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
