import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
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
        nullable: false,
    })
    providedElsewhere: string;

    @ManyToOne((type) => EventTracker, (eventTracker) => eventTracker.dataValues)
    @JoinColumn({ referencedColumnName: 'id' })
    event: EventTracker;
}
