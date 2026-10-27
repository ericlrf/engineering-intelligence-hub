import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { PrismaService } from '../common/prisma.service';

@Module({ controllers: [MarketController], providers: [MarketService, PrismaService] })
export class MarketModule {}
