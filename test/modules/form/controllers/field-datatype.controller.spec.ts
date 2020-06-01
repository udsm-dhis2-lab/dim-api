import { Test, TestingModule } from '@nestjs/testing';
import { FieldDatatypeController } from './field-datatype.controller';

describe('FieldDatatype Controller', () => {
  let controller: FieldDatatypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldDatatypeController],
    }).compile();

    controller = module.get<FieldDatatypeController>(FieldDatatypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
