import { Test, TestingModule } from '@nestjs/testing';
import { MessageMetadataService } from './message-metadata.service';

describe('MessageMetadataService', () => {
  let service: MessageMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageMetadataService],
    }).compile();

    service = module.get<MessageMetadataService>(MessageMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
