import { Test, TestingModule } from '@nestjs/testing';
import { FormVisibleFieldsController } from './form-visible-fields.controller';

describe('FormVisibleFields Controller', () => {
  let controller: FormVisibleFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormVisibleFieldsController],
    }).compile();

    controller = module.get<FormVisibleFieldsController>(FormVisibleFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
