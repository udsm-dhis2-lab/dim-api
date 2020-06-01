import { Test, TestingModule } from '@nestjs/testing';
import { FieldMemberController } from './field-member.controller';

describe('FieldMember Controller', () => {
  let controller: FieldMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldMemberController],
    }).compile();

    controller = module.get<FieldMemberController>(FieldMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
