import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly service: MarketService) {}

  @Post('seed')
  seed(@Body() body: { records: Array<{year:number;segment:string;technology:string;revenue:number;source:string}> }) {
    return this.service.seed(body.records);
  }

  @Get('indicators')
  indicators() { return this.service.indicators(); }
}
