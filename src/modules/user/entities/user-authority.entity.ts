import { Column, Entity, JoinTable, ManyToMany, JoinColumn } from 'typeorm';
import { UserRole } from './user-role.entity';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('userauthorities', { schema: 'public' })
export class UserAuthority extends EntityCoreProps {
    static APIEndPoint = 'userAuthorities';

    @Column({ type: 'varchar', unique: true, length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string | null;

    /**
     * Many To Many Relationship: UserAuthorities and UserRole Entities
     */
    @ManyToMany(type => UserRole, userRole => userRole.userAuthorities, {
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: 'userauthoritymembers',
        joinColumn: { referencedColumnName: 'id' },
        inverseJoinColumn: { referencedColumnName: 'id' },
    })
    userRoles: UserRole[];
}
