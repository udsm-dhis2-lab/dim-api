/**
 *
 */
import { Controller } from '@nestjs/common';
/**
 *
 */
import { DataValueService } from '../../services/data-value/data-value.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { DataValue } from '../../entities/data-value.entity';

/**
 *
 */
@Controller('api/' + DataValue.APIEndPoint)
export class DataValueController extends BaseController<DataValue> {
    /**
     *
     * @param dataValueService
     */
    constructor(private readonly dataValueService: DataValueService) {
        /**
         *
         */
        super(dataValueService, DataValue);
    }
}
