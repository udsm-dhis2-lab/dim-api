import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionChildrenController } from './field-option-children.controller';

describe('FieldOptionChildren Controller', () => {
  let controller: FieldOptionChildrenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldOptionChildrenController],
    }).compile();

    controller = module.get<FieldOptionChildrenController>(FieldOptionChildrenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
