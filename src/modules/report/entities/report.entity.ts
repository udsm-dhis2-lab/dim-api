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
        nullable: false,
    })
    name: string;

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
        name: 'categoryoptioncombo',
        nullable: true,
    })
    categoryOptionCombo: string;
}
