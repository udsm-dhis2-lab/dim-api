/**
 *
 */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
/**
 *
 */
import { DataValueController } from './controllers/data-value/data-value.controller';
import { DataValueService } from './services/data-value/data-value.service';
import { DataValue } from './entities/data-value.entity';
/**
 *
 */
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([DataValue]),
  ],
  controllers: [DataValueController],
  providers: [DataValueService],
})
/**
 *
 */
export class DataValueModule { }
