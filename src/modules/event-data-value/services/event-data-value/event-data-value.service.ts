import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { EventDataValue } from '../../entities/event-data-value.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventDataValueService extends BaseService<EventDataValue> {
    constructor(
        @InjectRepository(EventDataValue)
        private readonly dataValueRepository: Repository<EventDataValue>,
    ) {
        super(dataValueRepository, EventDataValue);
    }
}
