import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Dataset } from '../../entities/dataset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DatasetService extends BaseService<Dataset> {
    constructor(
        @InjectRepository(Dataset)
        private readonly dataSetRepository: Repository<Dataset>,
    ) {
        super(dataSetRepository, Dataset);
    }
}
