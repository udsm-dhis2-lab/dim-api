/**
 *
 */
import { Controller } from '@nestjs/common';

/**
 *
 */
import { BaseController } from 'src/core/controllers/base.contoller';
import { System } from '../../entities/system.entity';
import { SystemService } from '../../services/system.service';

/**
 *
 */
@Controller('api/' + System.APIEndPoint)
/**
 *
 */
export class SystemController extends BaseController<System> {
    /**
     *
     * @param systemService
     */
    constructor(private readonly systemService: SystemService) {
        /**
         *
         */
        super(systemService, System);
    }
}
