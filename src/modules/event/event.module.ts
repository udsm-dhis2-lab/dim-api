import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventTracker } from './entities/event.entity';
import { EventController } from './controllers/event/event.controller';
import { EventService } from './services/event/event.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([EventTracker]),
    ],
    controllers: [EventController],
    providers: [EventService],
})
export class EventModule { }
