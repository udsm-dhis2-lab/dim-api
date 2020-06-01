/**
 *
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
/**
 *
 */
import { ReportService } from './services/report/report.service';
import { ReportController } from './controllers/report/report.controller';
import { Report } from './entities/report.entity';
/**
 *
 */
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Report]),
  ],
  providers: [ReportService],
  controllers: [ReportController],
})
/**
 *
 */
export class ReportModule {}
