import { Test, TestingModule } from '@nestjs/testing';
import { FieldInputTypeController } from './field-input-type.controller';

describe('FieldInputType Controller', () => {
  let controller: FieldInputTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldInputTypeController],
    }).compile();

    controller = module.get<FieldInputTypeController>(FieldInputTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
