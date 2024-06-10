import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') user_id: string) {
    return this.userService.getUser(user_id);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Put(':id')
  async updateUser(@Param('id') user_id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(dto, user_id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') user_id: string) {
    return this.userService.deleteUser(user_id);
  }
}
