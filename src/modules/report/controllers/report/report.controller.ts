/**
 *
 */
import { Controller } from '@nestjs/common';
/**
 *
 */
import { BaseController } from 'src/core/controllers/base.contoller';
import { Report } from '../../entities/report.entity';
import { ReportService } from '../../services/report/report.service';

/**
 *
 */
@Controller('api/' + Report.APIEndPoint)
/**
 *
 */
export class ReportController extends BaseController<Report> {
    /**
     *
     * @param payloadService
     */
    constructor(private readonly payloadService: ReportService) {
        /**
         *
         */
        super(payloadService, Report);
    }
}
