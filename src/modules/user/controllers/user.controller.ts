import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/modules/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/core/controllers/base.contoller';

@Controller('api/' + User.APIEndPoint)
// @UseGuards(AuthGuard())
export class UsersController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService, User);
  }
}
