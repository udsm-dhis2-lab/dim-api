import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionGroupsetController } from './field-option-groupset.controller';

describe('FieldOptionGroupset Controller', () => {
  let controller: FieldOptionGroupsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldOptionGroupsetController],
    }).compile();

    controller = module.get<FieldOptionGroupsetController>(FieldOptionGroupsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
