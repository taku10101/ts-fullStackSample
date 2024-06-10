import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getUsers() {
    return this.prisma.users.gerUsers();
  }

  @Get(':id')
  async getUser(@Param('id') user_id: string) {
    return this.prisma.users.getUser(user_id);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.prisma.users.createUser(dto);
  }

  @Put(':id')
  async updateUser(@Param('id') user_id: string, @Body() dto: UpdateUserDto) {
    return this.prisma.users.updateUser(dto, user_id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') user_id: string) {
    return this.prisma.users.deleteUser(user_id);
  }
}
