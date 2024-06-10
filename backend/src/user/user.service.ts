import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.users.findMany();
  }

  async getUser(user_id: string) {
    return this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });
  }

  async createUser(dto: CreateUserDto) {
    return this.prisma.users.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
  }

  async updateUser(dto: CreateUserDto, user_id: string) {
    return this.prisma.users.update({
      where: {
        id: user_id,
      },
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
  }

  async deleteUser(user_id: string) {
    return this.prisma.users.delete({
      where: {
        id: user_id,
      },
    });
  }
}
