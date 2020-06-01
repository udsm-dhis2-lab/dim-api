/**
 *
 */
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

/**
 *
 */
import { EntityCoreProps } from 'src/core/entities/core-props';
import { Payload } from 'src/modules/payload/entities/payload.entity';

/**
 *
 */
@Entity('systems', { schema: 'public' })
/**
 *
 */
export class System extends EntityCoreProps {
    /**
     *
     */
    static APIEndPoint = 'systems';

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
        name: 'shortname',
        nullable: true,
    })
    shortName: string;

    /**
     *
     */
    @Column({
        type: 'varchar',
        name: 'description',
        nullable: true,
    })
    description: string;

    /**
     *
     */
    @OneToMany((type) => Payload, (payload) => payload.system, {
        /**
         * Added support for eager in order to get all related
         * Data values for a specific PAYLOAD
         */
        eager: true,
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ referencedColumnName: 'id' })
    payloads: Payload[];
}
