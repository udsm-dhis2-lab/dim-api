import { Test, TestingModule } from '@nestjs/testing';
import { DashboardChartController } from './dashboard-chart.controller';

describe('DashboardChart Controller', () => {
  let controller: DashboardChartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardChartController],
    }).compile();

    controller = module.get<DashboardChartController>(DashboardChartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
