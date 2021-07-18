import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get(':id')
  getUserInfo(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Post('')
  createuser(@Body() data: { name: string }) {
    return this.userService.create(data.name);
  }
}
