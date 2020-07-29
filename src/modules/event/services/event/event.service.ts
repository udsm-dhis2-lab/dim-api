import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventTracker } from '../../entities/event.entity';

@Injectable()
export class EventService extends BaseService<EventTracker> {
    constructor(
        @InjectRepository(EventTracker)
        private readonly dataValueRepository: Repository<EventTracker>,
    ) {
        super(dataValueRepository, EventTracker);
    }
}
