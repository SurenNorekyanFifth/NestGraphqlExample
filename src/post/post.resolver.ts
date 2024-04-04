import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Resolver(of => Post)
export class PostResolver {
    constructor(private readonly postService: PostService) {}

    @Query(returns => [Post])
    posts(): Post[] {
        return this.postService.findAll();
    }

    @Mutation(returns => Post)
    createPost(@Args('createPostInput') createPostDto: CreatePostDto): Post {
        return this.postService.create(createPostDto);
    }

}
