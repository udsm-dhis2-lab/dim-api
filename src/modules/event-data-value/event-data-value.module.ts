import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventDataValue } from './entities/event-data-value.entity';
import { EventDataValueController } from './controllers/event-data-value/event-data-value.controller';
import { EventDataValueService } from './services/event-data-value/event-data-value.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([EventDataValue]),
    ],
    controllers: [EventDataValueController],
    providers: [EventDataValueService],
})
export class EventDataValueModule { }
