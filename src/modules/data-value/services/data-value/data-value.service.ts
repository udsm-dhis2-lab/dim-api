/**
 *
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/**
 *
 */
import { BaseService } from 'src/core/services/base.service';
import { DataValue } from '../../entities/data-value.entity';

/**
 *
 */
@Injectable()
/**
 *
 */
export class DataValueService extends BaseService<DataValue> {
    /**
     *
     * @param dataValueRepository
     */
    constructor(
        @InjectRepository(DataValue)
        private readonly dataValueRepository: Repository<DataValue>,
    ) {
        /**
         *
         */
        super(dataValueRepository, DataValue);
    }
}
