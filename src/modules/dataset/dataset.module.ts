import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dataset } from './entities/dataset.entity';
import { DatasetController } from './controllers/dataset/dataset.controller';
import { DatasetService } from './services/dataset/dataset.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Dataset]),
    ],
    controllers: [DatasetController],
    providers: [DatasetService],
})
export class DatasetModule { }
