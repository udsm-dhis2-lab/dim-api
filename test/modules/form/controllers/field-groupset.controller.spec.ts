import { Test, TestingModule } from '@nestjs/testing';
import { FieldGroupsetController } from './field-groupset.controller';

describe('FieldGroupset Controller', () => {
  let controller: FieldGroupsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldGroupsetController],
    }).compile();

    controller = module.get<FieldGroupsetController>(FieldGroupsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
