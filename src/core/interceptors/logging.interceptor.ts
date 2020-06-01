import {
  Inject,
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: CallHandler): Observable<any> {
    const requestObject = context.switchToHttp().getResponse();

    const request = requestObject ? requestObject.req || {} : {};

    const now = Date.now();

    return call$
      .handle()
      .pipe(
        tap(() =>
        Logger.log(
          `${request.method} ${request.url} ${Date.now() - now}ms`,
          context.getClass().name,
        ),
          
        ),
      );
  }
}
