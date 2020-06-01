import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitLevelService } from '../../../../src/modules/organisation-unit/services/organisation-unit-level.service';
import { BaseService } from '../../../../src/core/services/base.service';

describe('OrganisationUnitLevelService', () => {
  let service: OrganisationUnitLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseService, OrganisationUnitLevelService],
    }).compile();

    service = module.get<OrganisationUnitLevelService>(
      OrganisationUnitLevelService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
