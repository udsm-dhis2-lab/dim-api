import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

import { MessageService } from './services/message.service';
import { MessageController } from './controllers/message/message.controller';
import { Message } from './entities/message.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Message]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
