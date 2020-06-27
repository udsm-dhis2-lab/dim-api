import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/core-props';
import { Report } from 'src/modules/report/entities/report.entity';
/**
 *
 */
@Entity('messages', { schema: 'public' })
/**
 *
 */
export class Message extends EntityCoreProps {
    /**
     *
     */
    static APIEndPoint = 'messages';

    @Column({
        type: 'varchar',
        name: 'objectid',
        length: '255',
        nullable: false,
    })
    objectId: string;

    @Column({
        type: 'text',
        name: 'message',
        nullable: false,
    })
    message: string;

    @ManyToOne((type) => Report, (report) => report.messages)
    @JoinColumn({ referencedColumnName: 'id' })
    report: Report;
}
