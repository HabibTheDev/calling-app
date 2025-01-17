import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  public async use(req: Request, _: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException(
        { message: 'Unauthorized' },
        HttpStatus.BAD_REQUEST,
      );
    }
    next();
  }
}
