import { Controller } from '@nestjs/common';
import { Message } from '../../entities/message.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { MessageService } from '../../services/message.service';
/**
 *
 */
@Controller('api/' + Message.APIEndPoint)
/**
 *
 */
export class MessageController extends BaseController<Message> {
    /**
     *
     * @param messageService
     */
    constructor(private readonly messageService: MessageService) {
        /**
         *
         */
        super(messageService, Message);
    }
}
