import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async getComments(post_id: string) {
    return this.prisma.comment.findMany({
      where: {
        post_id: post_id,
      },
    });
  }

  async getComment(post_id: string, comment_id: string) {
    return this.prisma.comment.findUnique({
      where: {
        id: comment_id,
        post_id: post_id,
      },
    });
  }

  async createComment(post_id: string, dto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        post_id: post_id,
        content: dto.content,
        user_id: dto.user_id,
      },
    });
  }

  async updateComment(
    post_id: string,
    comment_id: string,
    dto: UpdateCommentDto,
  ) {
    return this.prisma.comment.update({
      where: {
        id: comment_id,
      },
      data: {
        post_id: post_id,
        content: dto.content,
      },
    });
  }

  async deleteComment(post_id: string, comment_id: string) {
    return this.prisma.comment.delete({
      where: {
        id: comment_id,
      },
    });
  }
}
