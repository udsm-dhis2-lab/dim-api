import { Test, TestingModule } from '@nestjs/testing';
import { FieldRelationController } from './field-relation.controller';

describe('FieldRelation Controller', () => {
  let controller: FieldRelationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldRelationController],
    }).compile();

    controller = module.get<FieldRelationController>(FieldRelationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
