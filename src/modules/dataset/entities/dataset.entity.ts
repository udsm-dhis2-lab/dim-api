import { EntityCoreProps } from 'src/core/entities/core-props';
import { Column, Entity } from 'typeorm';

@Entity('datasets', { schema: 'public' })
export class Dataset extends EntityCoreProps {
    static APIEndPoint = 'dataSets';

    @Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
    })
    name: string;
}
