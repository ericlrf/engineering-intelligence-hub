import { Injectable, NotFoundException } from '@nestjs/common';
import { ReviewStatus } from '@prisma/client';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class DrawingsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.drawingRevision.findMany({ include: { document: true }, orderBy: { createdAt: 'desc' } });
  }

  async create(documentId: string) {
    const doc = await this.prisma.technicalDocument.findUnique({ where: { id: documentId } });
    if (!doc) throw new NotFoundException('Documento não encontrado');
    const latest = await this.prisma.drawingRevision.findFirst({ where: { documentId }, orderBy: { version: 'desc' } });
    const version = (latest?.version || 0) + 1;
    const spec = doc.extracted as any;
    const width = 700;
    const height = 420;
    const title = `${spec.model || 'EQUIPAMENTO'} - ${spec.power_kw || '?'} kW`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect x="40" y="40" width="620" height="300" fill="none" stroke="black" stroke-width="2"/><rect x="100" y="100" width="500" height="150" fill="none" stroke="black"/><text x="110" y="130" font-size="20">${title}</text><text x="110" y="165" font-size="16">Tensão: ${spec.voltage_v || '?'} V</text><text x="110" y="195" font-size="16">Frequência: ${spec.frequency_hz || '?'} Hz</text><text x="110" y="225" font-size="16">Revisão: ${version}</text><text x="45" y="375" font-size="14">Desenho demonstrativo - dados sintéticos</text></svg>`;
    return this.prisma.drawingRevision.create({ data: { documentId, version, svg } });
  }

  setStatus(id: string, status: ReviewStatus) {
    return this.prisma.drawingRevision.update({ where: { id }, data: { status } });
  }
}
