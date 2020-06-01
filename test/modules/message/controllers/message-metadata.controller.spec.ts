import { Test, TestingModule } from '@nestjs/testing';
import { MessageMetadataController } from './message-metadata.controller';

describe('MessageMetadata Controller', () => {
  let controller: MessageMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageMetadataController],
    }).compile();

    controller = module.get<MessageMetadataController>(MessageMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
