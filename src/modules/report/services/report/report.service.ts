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
import { Report } from '../../entities/report.entity';

/**
 *
 */
@Injectable()
/**
 *
 */
export class ReportService extends BaseService<Report> {
    /**
     *
     * @param payloadRepository
     */
    constructor(
        @InjectRepository(Report)
        private readonly payloadRepository: Repository<Report>,
    ) {
        /**
         *
         */
        super(payloadRepository, Report);
    }
}
