import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationUnitGroupSetService } from '../../../../src/modules/organisation-unit/services/organisation-unit-group-set.service';

describe('OrganisationUnitGroupSetService', () => {
  let service: OrganisationUnitGroupSetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationUnitGroupSetService],
    }).compile();

    service = module.get<OrganisationUnitGroupSetService>(
      OrganisationUnitGroupSetService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
