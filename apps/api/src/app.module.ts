import { Module } from '@nestjs/common';
import { DocumentsModule } from './documents/documents.module';
import { DrawingsModule } from './drawings/drawings.module';
import { MarketModule } from './market/market.module';
import { HmiModule } from './hmi/hmi.module';

@Module({ imports: [DocumentsModule, DrawingsModule, MarketModule, HmiModule] })
export class AppModule {}
