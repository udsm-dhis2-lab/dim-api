/**
 *
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/**
 *
 */
import { System } from '../entities/system.entity';
import { BaseService } from 'src/core/services/base.service';

/**
 *
 */
@Injectable()
/**
 *
 */
export class SystemService extends BaseService<System> {
    /**
     *
     * @param systemRepository
     */
    constructor(
        @InjectRepository(System)
        private readonly systemRepository: Repository<System>,
    ) {
        /**
         *
         */
        super(systemRepository, System);
    }
}
