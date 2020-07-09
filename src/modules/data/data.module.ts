import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './entities/data.entity';
import { DataController } from './controllers/data/data.controller';
import { DataService } from './services/data/data.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Data]),
    ],
    controllers: [DataController],
    providers: [DataService],
})
export class DataModule { }
