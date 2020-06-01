import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpErrorFilter } from './core/filters/http-error.filter';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { getDataBaseConfiguration } from './core/utilities/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './modules/user/user.module';
import { SystemModule } from './modules/system/system.module';
import { DataValueModule } from './modules/data-value/data-value.module';
import { PayloadModule } from './modules/payload/payload.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    Repository,
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    ScheduleModule.forRoot(),
    UserModule,
    SystemModule,
    DataValueModule,
    PayloadModule,
    ReportModule
  ],

  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_FILTER, useClass: HttpErrorFilter },
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
