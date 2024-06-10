import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts() {
    //findMany 全てのデータを取得
    return this.prisma.posts.findMany();
  }

  async getPost(post_id: string) {
    //findUnique idを指定してデータを取得
    return this.prisma.posts.findUnique({
      where: {
        id: post_id,
      },
    });
  }
  async createPost(dto: CreatePostDto) {
    //dtoで定義したcontentとuser_idの方を使ってデータを作成
    return this.prisma.posts.create({
      data: {
        content: dto.content,
        user_id: dto.user_id,
      },
    });
  }

  async updatePost(dto: CreatePostDto, post_id: string) {
    //dtoで定義したcontentとuser_idの方を使ってデータを更新
    return this.prisma.posts.update({
      //idを指定してデータを指定
      where: {
        id: post_id,
      },
      //更新するデータ
      data: {
        content: dto.content,
        user_id: dto.user_id,
      },
    });
  }

  async deletePost(post_id: string) {
    //delete idを指定してデータを削除
    return this.prisma.posts.delete({
      //idでデータを指定
      where: {
        id: post_id,
      },
    });
  }
}
