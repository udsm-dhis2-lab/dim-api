/**
 *
 */
import { Controller } from '@nestjs/common';
/**
 *
 */
import { BaseController } from 'src/core/controllers/base.contoller';
import { Payload } from '../../entities/payload.entity';
import { PayloadService } from '../../services/payload/payload.service';

/**
 *
 */
@Controller('api/' + Payload.APIEndPoint)
/**
 *
 */
export class PayloadController extends BaseController<Payload> {
    /**
     *
     * @param payloadService
     */
    constructor(private readonly payloadService: PayloadService) {
        /**
         *
         */
        super(payloadService, Payload);
    }
}
