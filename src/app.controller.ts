import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health')
export class AppController {
  @Get('healthCheck')
  @ApiOkResponse({
    description:
      'If it returns OK then api is online, only serves this porpuse.',
  })
  healthCheck(): string {
    return 'Ok';
  }
}
