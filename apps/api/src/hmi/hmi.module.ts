import { Module } from '@nestjs/common';
import { HmiController } from './hmi.controller';
import { HmiService } from './hmi.service';
import { PrismaService } from '../common/prisma.service';

@Module({ controllers: [HmiController], providers: [HmiService, PrismaService] })
export class HmiModule {}
