import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Dataset } from '../../entities/dataset.entity';
import { DatasetService } from '../../services/dataset/dataset.service';

@Controller('api/' + Dataset.APIEndPoint)
export class DatasetController extends BaseController<Dataset> {
    constructor(private dataSetService: DatasetService) {
        super(dataSetService, Dataset);
    }
}
