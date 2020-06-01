import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/core/controllers/base.contoller';
import { UserAuthorityService } from '../services/user-authority.service';
import { UserAuthority } from '../entities/user-authority.entity';

@Controller('api/' + UserAuthority.APIEndPoint)
// @UseGuards(AuthGuard())
export class UserAuthorityController extends BaseController<UserAuthority> {
    constructor(private readonly userAuthorityService: UserAuthorityService) {
        super(userAuthorityService, UserAuthority);
    }
}
