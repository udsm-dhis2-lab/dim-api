import { Injectable } from '@nestjs/common';
import { Message } from '../entities/message.entity';
import { BaseService } from 'src/core/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService extends BaseService<Message> {
    constructor(
        @InjectRepository(Message)
        private readonly payloadRepository: Repository<Message>,
    ) {
        super(payloadRepository, Message);
    }
}
