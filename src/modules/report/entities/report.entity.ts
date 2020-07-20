/**
 *
 */
import { Column, Entity, OneToMany } from 'typeorm';
/**
 *
 */
import { EntityCoreProps } from 'src/core/entities/core-props';
import { Message } from 'src/modules/message/entities/message.entity';
/**
 *
 */
@Entity('reports', { schema: 'public' })
/**
 *
 */
export class Report extends EntityCoreProps {
    static APIEndPoint = 'reports';

    @Column({
        type: 'varchar',
        name: 'sourcesystemid',
        nullable: true,
    })
    sourceSystemName: string;

    @Column({
        type: 'varchar',
        name: 'sourcesystemName',
        nullable: true,
    })
    sourceSystemId: string;

    @Column({
        type: 'varchar',
        name: 'sourceexchangeperiod',
        nullable: false,
    })
    sourceExchangePeriod: string;

    @Column({
        type: 'varchar',
        name: 'sourceexchangedate',
        nullable: true,
    })
    sourceExchangeDate: string;

    @Column({
        type: 'varchar',
        name: 'sourcevalue',
        nullable: true,
    })
    sourceValue: string;

    @Column({
        type: 'varchar',
        name: 'sourcedataelementname',
        nullable: true,
    })
    sourceDataElementName: string;

    @Column({
        type: 'varchar',
        name: 'sourcedataelementId',
        nullable: true,
    })
    sourceDataElementId: string;

    @Column({
        type: 'varchar',
        name: 'sourceorgunitname',
        nullable: true,
    })
    sourceOrgUnitName: string;

    @Column({
        type: 'varchar',
        name: 'sourceorgunitid',
        nullable: true,
    })
    sourceOrgUnitId: string;

    @Column({
        type: 'varchar',
        name: 'destinationsystemname',
        nullable: true,
    })
    destinationSystemName: string;

    @Column({
        type: 'varchar',
        name: 'destinationsystemid',
        nullable: true,
    })
    destinationSystemId: string;

    @Column({
        type: 'varchar',
        name: 'destinationdatasetname',
        nullable: true,
    })
    destinationDataSetName: string;

    @Column({
        type: 'varchar',
        name: 'destinationdatasetid',
        nullable: true,
    })
    destinationDataSetId: string;

    @Column({
        type: 'varchar',
        name: 'destinationcomment',
        nullable: true,
    })
    destinationComment: string;

    @Column({
        type: 'varchar',
        name: 'destinationsystem',
        nullable: true,
    })
    destinationSystem: string;

    @Column({
        type: 'varchar',
        name: 'destinationexchangeperiod',
        nullable: true,
    })
    destinationExchangePeriod: string;

    @Column({
        type: 'varchar',
        name: 'destinationexchangedate',
        nullable: true,
    })
    destinationExchangeDate: string;

    @Column({
        type: 'varchar',
        name: 'destinationvalue',
        nullable: true,
    })
    destinationValue: string;

    @Column({
        type: 'varchar',
        name: 'destinationcategoryoptioncomboname',
        nullable: true,
    })
    destinationCategoryOptionComboName: string;

    @Column({
        type: 'varchar',
        name: 'destinationcategoryoptioncomboid',
        nullable: true,
    })
    destinationCategoryOptionComboId: string;

    @Column({
        type: 'varchar',
        name: 'destinationdataelementname',
        nullable: true,
    })
    destinationDataElementName: string;

    @Column({
        type: 'varchar',
        name: 'destinationdataelementid',
        nullable: true,
    })
    destinationDataElementId: string;

    @Column({
        type: 'varchar',
        name: 'destinationorgunitname',
        nullable: true,
    })
    destinationOrgUnitName: string;

    @Column({
        type: 'varchar',
        name: 'destinationorgunitid',
        nullable: true,
    })
    destinationOrgUnitId: string;

    @Column({
        type: 'varchar',
        name: 'status',
        nullable: true,
    })
    status: string;

    @OneToMany((type) => Message, (message) => message.report, {
        /**
         * Added support for eager in order to get all related
         * Data values for a specific Report
         */
        eager: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    messages: Message[];
}
