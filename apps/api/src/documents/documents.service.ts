import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.technicalDocument.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async extract(filename: string, text: string) {
    const aiUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
    const { data } = await axios.post(`${aiUrl}/extract/specification`, { text });
    return this.prisma.technicalDocument.create({
      data: { filename, rawText: text, extracted: data }
    });
  }
}
