/**
 *
 */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
/**
 *
 */
import { Payload } from './entities/payload.entity';
import { PayloadController } from './controllers/payload/payload.controller';
import { PayloadService } from './services/payload/payload.service';

/**
 *
 */
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Payload]),
    ],
    controllers: [PayloadController],
    providers: [PayloadService],
})
/**
 *
 */
export class PayloadModule { }
