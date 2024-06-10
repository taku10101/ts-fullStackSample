import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Controller('posts/:post_id/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComments(@Param('post_id') post_id: string) {
    return this.commentService.getComments(post_id);
  }

  @Get('/:comment_id')
  async getComment(
    @Param('post_id') post_id: string,
    @Param('comment_id') comment_id: string,
  ) {
    return this.commentService.getComment(post_id, comment_id);
  }

  @Post()
  async createComment(
    @Param('post_id') post_id: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.commentService.createComment(post_id, dto);
  }

  @Put('/:comment_id')
  async updateComment(
    @Param('post_id') post_id: string,
    @Param('comment_id') comment_id: string,
    @Body() dto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(post_id, comment_id, dto);
  }

  @Delete('/:comment_id')
  async deleteComment(
    @Param('post_id') post_id: string,
    @Param('comment_id') comment_id: string,
  ) {
    return this.commentService.deleteComment(post_id, comment_id);
  }
}
