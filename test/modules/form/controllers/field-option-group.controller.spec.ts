import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionGroupController } from './field-option-group.controller';

describe('FieldOptionGroup Controller', () => {
  let controller: FieldOptionGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldOptionGroupController],
    }).compile();

    controller = module.get<FieldOptionGroupController>(FieldOptionGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
