import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Data } from '../../entities/data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DataService extends BaseService<Data> {
    constructor(
        @InjectRepository(Data)
        private readonly dataRepository: Repository<Data>,
    ) {
        super(dataRepository, Data);
    }
}
