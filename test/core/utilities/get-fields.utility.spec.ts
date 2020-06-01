import { OrganisationUnit } from '../../../src/modules/organisation-unit/entities/organisation-unit.entity';
import { getSelections, getRelations } from '../../../src/core/utilities/get-fields.utility';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataBaseConfiguration } from '../../../src/core/utilities/configuration';

describe('Testing Fields Convertion on API', () => {
    var orgMetaData;
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(getDataBaseConfiguration()),
            ]
        }).compile();
        orgMetaData = OrganisationUnit.getRepository().metadata;
    });

    it('Testing Getting Selections', () => {
        //organisationUnit.con
        var select = getSelections('name,children[name,children]', orgMetaData);
        
        expect(select.length).toBe(2);
        expect(select.indexOf('name') > -1).toBe(true);
        expect(select.indexOf('id') > -1).toBe(true);
    });
    it('Testing Getting Relations', () => {
        var select = getRelations('name,children', orgMetaData);
        expect(select.length).toBe(1);
        expect(select.indexOf('children') > -1).toBe(true);

        select = getRelations('name,children[name,children]', orgMetaData);
        console.log(select);
        expect(select.indexOf('children') > -1).toBe(true);
        expect(select.indexOf('children.children') > -1).toBe(true);

        select = getRelations('name,parent[parent[name]]', orgMetaData);
        console.log(select);
        expect(select.indexOf('parent') > -1).toBe(true);
        expect(select.indexOf('parent.parent') > -1).toBe(true);
    });
});
