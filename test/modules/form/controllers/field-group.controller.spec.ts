import { Test, TestingModule } from '@nestjs/testing';
import { FieldGroupController } from './field-group.controller';

describe('FieldGroup Controller', () => {
  let controller: FieldGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldGroupController],
    }).compile();

    controller = module.get<FieldGroupController>(FieldGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
