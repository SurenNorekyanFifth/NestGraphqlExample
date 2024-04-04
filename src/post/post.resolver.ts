import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query((returns) => Post)
  async post(@Args('id') id: number): Promise<Post> {
    return this.postService.findOne(id);
  }

  @Mutation((returns) => Post)
  async createPost(
    @Args('createPostInput') createPostDto: CreatePostDto,
  ): Promise<Post> {
    return this.postService.create(createPostDto);
  }

  @Mutation((returns) => Post)
  async updatePost(
    @Args('id') id: number,
    @Args('updatePostInput') updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    return this.postService.update(id, updatePostDto);
  }

  @Mutation((returns) => Boolean)
  async deletePost(@Args('id') id: number): Promise<boolean> {
    await this.postService.remove(id);
    return true;
  }
}
