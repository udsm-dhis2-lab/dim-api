/**
 *
 */
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
/**
 *
 */
import { EntityCoreProps } from 'src/core/entities/core-props';
import { Payload } from 'src/modules/payload/entities/payload.entity';
/**
 *
 */
@Entity('datavalues', { schema: 'public' })
/**
 *
 */
export class DataValue extends EntityCoreProps {
    static APIEndPoint = 'dataValues';

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'dataelement',
        nullable: false,
    })
    dataElement: string;

    @Column({
        type: 'varchar',
        name: 'categoryoptioncombo',
        nullable: true,
    })
    categoryOptionCombo: string;

    @Column({
        type: 'bigint',
        name: 'value',
        nullable: false,
    })
    value: string;

    @Column({
        type: 'varchar',
        name: 'comment',
        nullable: true,
    })
    comment: string;

    /**
     *
     */
    @ManyToOne((type) => Payload, (payload) => payload.dataValues)
    @JoinColumn({ referencedColumnName: 'id' })
    payload: Payload;
}
