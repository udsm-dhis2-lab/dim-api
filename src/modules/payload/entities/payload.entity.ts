/**
 *
 */
import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
/**
 *
 */
import { EntityCoreProps } from 'src/core/entities/core-props';
import { System } from 'src/modules/system/entities/system.entity';
import { DataValue } from 'src/modules/data-value/entities/data-value.entity';
/**
 *
 */
@Entity('payloads', { schema: 'public' })
/**
 *
 */
export class Payload extends EntityCoreProps {
    /**
     *
     */
    static APIEndPoint = 'payloads';

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'name',
        length: '255',
        nullable: false,
    })
    name: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'dataset',
        length: '255',
        nullable: false,
    })
    dataSet: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'completedate',
        length: '255',
        nullable: false,
    })
    completeDate: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'orgunit',
        length: '255',
        nullable: false,
    })
    orgUnit: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'period',
        length: '255',
        nullable: false,
    })
    period: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'attributeoptioncombo',
        length: '255',
        nullable: true,
    })
    attributeOptionCombo: string;

    /**
     *
     */
    @ManyToOne((type) => System, (system) => system.payloads, {
        eager: true,
        cascade: true,
    })
    @JoinColumn({ referencedColumnName: 'id' })
    system: System;

    /**
     *
     */
    @OneToMany((type) => DataValue, (dataValue) => dataValue.payload, {
        /**
         * Added support for eager in order to get all related
         * Data values for a specific PAYLOAD
         */
        eager: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    dataValues: DataValue[];
}
