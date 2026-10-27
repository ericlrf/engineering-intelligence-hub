import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class HmiService {
  constructor(private readonly prisma: PrismaService) {}

  async ingest(sample: any) {
    const aiUrl = process.env.AI_SERVICE_URL || 'http://localhost:8000';
    const { data } = await axios.post(`${aiUrl}/anomaly/telemetry`, sample);
    return this.prisma.telemetrySample.create({
      data: {
        deviceId: sample.deviceId,
        frequencyHz: sample.frequencyHz,
        rpm: sample.rpm,
        voltageV: sample.voltageV,
        currentA: sample.currentA,
        temperatureC: sample.temperatureC,
        anomaly: data.anomaly
      }
    });
  }

  latest(deviceId: string) {
    return this.prisma.telemetrySample.findFirst({ where: { deviceId }, orderBy: { capturedAt: 'desc' } });
  }
}
