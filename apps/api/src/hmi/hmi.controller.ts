import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HmiService } from './hmi.service';

@Controller('hmi')
export class HmiController {
  constructor(private readonly service: HmiService) {}

  @Post('telemetry')
  ingest(@Body() body: any) { return this.service.ingest(body); }

  @Get(':deviceId/latest')
  latest(@Param('deviceId') deviceId: string) { return this.service.latest(deviceId); }
}
