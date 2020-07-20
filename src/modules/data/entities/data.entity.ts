import { Entity, Column } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('data', { schema: 'public' })
export class Data extends EntityCoreProps {
    static APIEndPoint = 'datas';

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'type',
        nullable: false,
    })
    type: string;
}
