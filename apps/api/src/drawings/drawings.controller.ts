import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewStatus } from '@prisma/client';
import { DrawingsService } from './drawings.service';

@Controller('drawings')
export class DrawingsController {
  constructor(private readonly service: DrawingsService) {}

  @Get()
  list() { return this.service.list(); }

  @Post()
  create(@Body() body: { documentId: string }) { return this.service.create(body.documentId); }

  @Patch(':id/status')
  status(@Param('id') id: string, @Body() body: { status: ReviewStatus }) {
    return this.service.setStatus(id, body.status);
  }
}
