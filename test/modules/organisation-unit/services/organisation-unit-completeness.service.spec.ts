import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitCompletenessService } from '../../../../src/modules/organisation-unit/services/organisation-unit-completeness.service';

describe('OrganisationUnitCompletenessService', () => {
  let service: OrganisationUnitCompletenessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationUnitCompletenessService],
    }).compile();

    service = module.get<OrganisationUnitCompletenessService>(
      OrganisationUnitCompletenessService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
