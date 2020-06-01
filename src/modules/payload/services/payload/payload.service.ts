/**
 *
 */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
/**
 *
 */
import { BaseService } from 'src/core/services/base.service';
import { Payload } from '../../entities/payload.entity';
import { DataValue } from 'src/modules/data-value/entities/data-value.entity';
/**
 *
 */
@Injectable()
/**
 *
 */
export class PayloadService extends BaseService<Payload> {
    /**
     *
     * @param payloadRepository
     */
    constructor(
        @InjectRepository(Payload)
        private readonly payloadRepository: Repository<Payload>,
    ) {
        /**
         *
         */
        super(payloadRepository, Payload);
    }
}
