import { Test, TestingModule } from '@nestjs/testing';
import { DataValueController } from './data-value.controller';

describe('DataValue Controller', () => {
  let controller: DataValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataValueController],
    }).compile();

    controller = module.get<DataValueController>(DataValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
