import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
