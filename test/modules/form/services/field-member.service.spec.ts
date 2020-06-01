import { Test, TestingModule } from '@nestjs/testing';
import { FieldMemberService } from './field-member.service';

describe('FieldMemberService', () => {
  let service: FieldMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldMemberService],
    }).compile();

    service = module.get<FieldMemberService>(FieldMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
