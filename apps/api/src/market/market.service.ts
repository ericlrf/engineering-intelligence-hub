import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class MarketService {
  constructor(private readonly prisma: PrismaService) {}

  async seed(records: Array<{year:number;segment:string;technology:string;revenue:number;source:string}>) {
    await this.prisma.marketRecord.deleteMany();
    await this.prisma.marketRecord.createMany({ data: records });
    return { inserted: records.length };
  }

  async indicators() {
    const rows = await this.prisma.marketRecord.findMany();
    const byTechnology = Object.values(rows.reduce((acc:any, r) => {
      acc[r.technology] ||= { technology: r.technology, revenue: 0, records: 0 };
      acc[r.technology].revenue += r.revenue;
      acc[r.technology].records += 1;
      return acc;
    }, {}));
    return { totalRecords: rows.length, byTechnology };
  }
}
