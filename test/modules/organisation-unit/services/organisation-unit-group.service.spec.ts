import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitGroupService } from '../../../../src/modules/organisation-unit/services/organisation-unit-group.service';

describe('OrganisationUnitGroupService', () => {
  let service: OrganisationUnitGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationUnitGroupService],
    }).compile();

    service = module.get<OrganisationUnitGroupService>(
      OrganisationUnitGroupService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
