import { Entity, Column, OneToMany } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/core-props';
import { EventDataValueService } from 'src/modules/event-data-value/services/event-data-value/event-data-value.service';
import { EventDataValue } from 'src/modules/event-data-value/entities/event-data-value.entity';

@Entity('event', { schema: 'public' })
export class EventTracker extends EntityCoreProps {
    static APIEndPoint = 'labResults';

    @Column({
        type: 'varchar',
        name: 'orgunit',
        nullable: false,
    })
    orgUnit: string;

    @Column({
        type: 'varchar',
        name: 'program',
        nullable: false,
    })
    program: string;

    @Column({
        type: 'varchar',
        name: 'programstage',
        nullable: false,
    })
    programStage: string;

    @Column({
        type: 'varchar',
        name: 'eventdate',
        nullable: false,
    })
    eventDate: string;

    @Column({
        type: 'varchar',
        name: 'status',
        nullable: false,
    })
    status: string;

    @Column({
        type: 'varchar',
        name: 'trackedentityinstance',
        nullable: false,
    })
    trackedEntityInstance: string;

    @OneToMany(
        (type) => EventDataValue,
        (eventDataValue) => eventDataValue.event,
        {
            eager: true,
            cascade: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    )
    dataValues: EventDataValue[];
}
