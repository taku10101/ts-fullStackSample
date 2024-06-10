import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @Get()
  async getPosts() {
    return this.postService.getPosts();
  }
  @Get(':id')
  async getPost(@Param('id') post_id: string) {
    return this.postService.getPost(post_id);
  }

  @Post()
  async createPost(dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Put(':id')
  async updatePost(@Param('id') post_id: string, @Body() dto: CreatePostDto) {
    return this.postService.updatePost(dto, post_id);
  }

  @Delete(':id')
  async deletePost(@Param('id') post_id: string) {
    return this.postService.deletePost(post_id);
  }
}
