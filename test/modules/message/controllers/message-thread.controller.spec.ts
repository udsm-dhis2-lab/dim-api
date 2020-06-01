import { Test, TestingModule } from '@nestjs/testing';
import { MessageThreadController } from './message-thread.controller';

describe('MessageThread Controller', () => {
  let controller: MessageThreadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageThreadController],
    }).compile();

    controller = module.get<MessageThreadController>(MessageThreadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
