import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly service: DocumentsService) {}

  @Get()
  list() { return this.service.list(); }

  @Post('extract')
  extract(@Body() body: { filename: string; text: string }) {
    return this.service.extract(body.filename, body.text);
  }
}
