import { Entity, Column, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/core-props';
import { EventTracker } from 'src/modules/event/entities/event.entity';

@Entity('eventdatavalue', { schema: 'public' })
export class EventDataValue extends EntityCoreProps {
    static APIEndPoint = 'dataValues';

    @Column({
        type: 'varchar',
        name: 'dataelement',
        nullable: false,
    })
    dataElement: string;

    @Column({
        type: 'varchar',
        name: 'value',
        nullable: false,
    })
    value: string;

    @Column({
        type: 'boolean',
        name: 'providedelsewhere',
        nullable: true,
    })
    providedElsewhere: boolean;

    @ManyToOne((type) => EventTracker, (eventTracker) => eventTracker.dataValues)
    @JoinColumn({ referencedColumnName: 'id' })
    event: EventTracker;

    @BeforeInsert()
    beforeInsertProvidedElsewhere() {
        /**
         *  You can generate UUID in different ways
         *  1. You can generate uuid of any length: i.e uuid('', 20)
         *      Example of UUID::: 8aydSxYBrrP
         *  2. You can generat UUID by prepending a context specific keyword i.e uuid('DIMMediator', 20)
         *      Example of UUID::: DIMMediator_8aydSxYBrrP
         */
        this.providedElsewhere = false;
    }
}
