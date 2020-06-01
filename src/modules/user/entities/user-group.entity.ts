import { Column, Entity, ManyToMany } from 'typeorm';
import { UserRole } from './user-role.entity';
import { User } from './user.entity';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('usergroups', { schema: 'public' })
export class UserGroup extends EntityCoreProps {
  static APIEndPoint = 'userGroups';

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ManyToMany(type => User, user => user.userGroups)
  users: User[];
}
