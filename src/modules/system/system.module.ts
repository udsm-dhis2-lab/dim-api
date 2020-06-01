import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { System } from './entities/system.entity';
import { SystemController } from './controllers/system/system.controller';
import { SystemService } from './services/system.service';
/**
 *
 */
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([System]),
  ],
  controllers: [SystemController],
  providers: [SystemService],
})
/**
 *
 */
export class SystemModule {}
