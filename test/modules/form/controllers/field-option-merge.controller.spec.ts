import { Test, TestingModule } from '@nestjs/testing';
import { FieldOptionMergeController } from './field-option-merge.controller';

describe('FieldOptionMerge Controller', () => {
  let controller: FieldOptionMergeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldOptionMergeController],
    }).compile();

    controller = module.get<FieldOptionMergeController>(FieldOptionMergeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
