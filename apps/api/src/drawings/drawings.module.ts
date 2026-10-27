import { Module } from '@nestjs/common';
import { DrawingsController } from './drawings.controller';
import { DrawingsService } from './drawings.service';
import { PrismaService } from '../common/prisma.service';

@Module({ controllers: [DrawingsController], providers: [DrawingsService, PrismaService] })
export class DrawingsModule {}
