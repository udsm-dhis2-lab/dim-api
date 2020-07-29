import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { EventDataValue } from '../../entities/event-data-value.entity';
import { EventDataValueService } from '../../services/event-data-value/event-data-value.service';

@Controller('api/epi-lab/' + EventDataValue.APIEndPoint)
export class EventDataValueController extends BaseController<EventDataValue> {
    constructor(private readonly eventDataValueService: EventDataValueService) {
        super(eventDataValueService, EventDataValue);
    }
}
