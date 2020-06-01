import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { UserGroup } from './user-group.entity';
import { UserRole } from './user-role.entity';
import { EntityCoreProps } from 'src/core/entities/core-props';

@Entity('systemusers', { schema: 'public' })
export class User extends EntityCoreProps {
  static APIEndPoint = 'users';

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({
    type: 'varchar',
    name: 'firstname',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  firstName: string | null;

  @Column({
    type: 'varchar',
    name: 'middlename',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  middleName: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  surname: string | null;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  password: string;

  @Column({
    type: 'varchar',
    name: 'phonenumber',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  phoneNumber: string | null;

  @Column({
    type: 'varchar',
    name: 'jobtitle',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  jobTitle: string | null;

  @Column({
    type: 'timestamp without time zone',
    name: 'lastlogin',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  lastLogin: Date | null;

  @Column({
    type: 'timestamp without time zone',
    name: 'expirydate',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  expiryDate: Date | null;

  @Column({
    type: 'timestamp without time zone',
    name: 'deleteddate',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  deletedDate: Date | null;

  @Column({ type: 'boolean', nullable: true })
  enabled: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
    default: () => 'NULL::varchar',
  })
  token: string | null;

  @ManyToMany((type) => UserRole, (userRole) => userRole.users, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'userrolemembers',
    joinColumn: { referencedColumnName: 'id' },
    inverseJoinColumn: { referencedColumnName: 'id' },
  })
  userRoles: UserRole[];

  @ManyToMany((type) => UserGroup, (userGroup) => userGroup.users, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'usergroupmembers',
    joinColumn: { referencedColumnName: 'id' },
    inverseJoinColumn: { referencedColumnName: 'id' },
  })
  userGroups: UserGroup[];

  public static async authenticateUser(user: {
    username: string;
    password: string;
  }): Promise<User> {
    return this.authenticateUserByToken(
      User.getBase64(user.username, user.password),
    );
  }

  public static async authenticateUserByToken(token: string): Promise<User> {
    let u: User;
    u = await User.findOne({
      where: { token },
    });
    if (u) {
      delete u.token;
      return u;
    }
  }

  public static getBase64(username, password) {
    return Buffer.from(username + ':' + password).toString('base64');
  }
  @BeforeInsert()
  createToken() {
    this.token = User.getBase64(this.username, this.password);
    this.enabled = true;
  }
}
