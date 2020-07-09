import { Entity, Column } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('datavalues', { schema: 'public' })
export class Data extends EntityCoreProps {
    static APIEndPoint = 'datas';

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
    })
    name: string;
}
