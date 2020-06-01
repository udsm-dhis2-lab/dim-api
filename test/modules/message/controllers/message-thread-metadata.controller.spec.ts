import { Test, TestingModule } from '@nestjs/testing';
import { MessageThreadMetadataController } from './message-thread-metadata.controller';

describe('MessageThreadMetadata Controller', () => {
  let controller: MessageThreadMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageThreadMetadataController],
    }).compile();

    controller = module.get<MessageThreadMetadataController>(MessageThreadMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
