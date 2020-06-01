import { Test, TestingModule } from '@nestjs/testing';
import { FormsectionFieldmembersController } from './formsection-fieldmembers.controller';

describe('FormsectionFieldmembers Controller', () => {
  let controller: FormsectionFieldmembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormsectionFieldmembersController],
    }).compile();

    controller = module.get<FormsectionFieldmembersController>(FormsectionFieldmembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
