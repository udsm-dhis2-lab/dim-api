import { Test, TestingModule } from '@nestjs/testing';
import { MessageThreadMetadataService } from './message-thread-metadata.service';

describe('MessageThreadMetadataService', () => {
  let service: MessageThreadMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageThreadMetadataService],
    }).compile();

    service = module.get<MessageThreadMetadataService>(MessageThreadMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
