import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Data } from '../../entities/data.entity';
import { DataService } from '../../services/data/data.service';

@Controller('api/' + Data.APIEndPoint)
export class DataController extends BaseController<Data> {
    constructor(private dataService: DataService) {
        super(dataService, Data)
    }
}
