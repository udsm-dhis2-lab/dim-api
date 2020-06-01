import { Test, TestingModule } from '@nestjs/testing';
import { DashboardChartService } from './dashboard-chart.service';

describe('DashboardChartService', () => {
  let service: DashboardChartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardChartService],
    }).compile();

    service = module.get<DashboardChartService>(DashboardChartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
