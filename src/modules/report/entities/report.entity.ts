/**
 *
 */
import { Column, Entity } from 'typeorm';
/**
 *
 */
import { EntityCoreProps } from 'src/core/entities/core-props';
/**
 *
 */
@Entity('reports', { schema: 'public' })
/**
 *
 */
export class Report extends EntityCoreProps {
    /**
     *
     */
    static APIEndPoint = 'reports';

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'name',
        nullable: true,
    })
    name: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'dataelement',
        nullable: false,
    })
    dataElement: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'categoryoptioncombo',
        nullable: true,
    })
    categoryOptionCombo: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'datatype',
        nullable: false,
    })
    dataType: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'orgunit',
        nullable: false,
    })
    orgUnit: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'period',
        nullable: false,
    })
    period: string;

    /**
     *
     */
    @Column({
        type: 'bigint',
        name: 'value',
        nullable: false,
    })
    value: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'from',
        nullable: false,
    })
    from: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'to',
        nullable: false,
    })
    to: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'status',
        nullable: true,
    })
    status: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'message',
        nullable: true,
    })
    message: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'transactiondate',
        nullable: true,
    })
    transactionDate: Date;
}
