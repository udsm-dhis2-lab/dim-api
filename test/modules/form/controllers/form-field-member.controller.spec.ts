import { Test, TestingModule } from '@nestjs/testing';
import { FormFieldMemberController } from 'src/modules/form/controllers/form-field-member.controller';

describe('FormFieldMember Controller', () => {
  let controller: FormFieldMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormFieldMemberController],
    }).compile();

    controller = module.get<FormFieldMemberController>(FormFieldMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
