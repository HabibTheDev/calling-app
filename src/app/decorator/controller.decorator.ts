import { applyDecorators } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

export function ControllerDecorator(
  tags: string[],
  summary: string,
  okDescription: string,
  badRequestDescription: string,
  errorDescription: string,
) {
  return applyDecorators(
    ApiTags(...tags),
    ApiOperation({ summary }),
    ApiOkResponse({ description: okDescription }),
    ApiBadRequestResponse({ description: badRequestDescription }),
    ApiInternalServerErrorResponse({ description: errorDescription }),
  );
}
