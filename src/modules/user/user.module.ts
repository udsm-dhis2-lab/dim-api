import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserGroup } from './entities/user-group.entity';
import { UserRole } from './entities/user-role.entity';
import { UsersController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AppAuthGuard } from './guards/roles.guard';
import { UserAuthorityController } from './controllers/user-authority.controller';
import { UserAuthorityService } from './services/user-authority.service';
import { UserAuthority } from './entities/user-authority.entity';
import { UserGroupController } from './controllers/user-group.controller';
import { UserGroupService } from './services/user-group.service';
import { UserRoleController } from './controllers/user-role.controller';
import { UserRoleService } from './services/user-role.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([User, UserGroup, UserRole, UserAuthority]),
    ],
    controllers: [
        UsersController,
        AuthController,
        UserAuthorityController,
        UserGroupController,
        UserRoleController,
    ],
    providers: [
        UserService,
        AuthService,
        AppAuthGuard,
        UserAuthorityService,
        UserGroupService,
        UserRoleService,
    ],
})
export class UserModule { }
