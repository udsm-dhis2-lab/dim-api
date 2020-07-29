import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { EventService } from '../../services/event/event.service';
import { EventTracker } from '../../entities/event.entity';

@Controller('api/epi-lab/' + EventTracker.APIEndPoint)
export class EventController extends BaseController<EventTracker> {
    constructor(private readonly eventDataValueService: EventService) {
        super(eventDataValueService, EventTracker);
    }
}
