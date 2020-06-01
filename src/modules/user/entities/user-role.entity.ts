import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';
import { UserAuthority } from './user-authority.entity';
import { User } from './user.entity';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('userroles', { schema: 'public' })
export class UserRole extends EntityCoreProps {
  static APIEndPoint = 'userRoles';

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  /**
   * Many To Many Relationship: UserRole and User Entities
   */
  @ManyToMany((type) => User, (user) => user.userRoles, { nullable: false })
  users: User[];

  /**
   * Many To Many Relationship: UserAuthorities and UserRole Entities
   */
  @ManyToMany(
    (type) => UserAuthority,
    (userAuthority) => userAuthority.userRoles,
    {
      nullable: false,
      eager: true,
      cascade: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  userAuthorities: UserAuthority[];
}
