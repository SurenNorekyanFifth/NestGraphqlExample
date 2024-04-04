import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import {CreatePostDto} from "./dto/create-post.dto";

@Injectable()
export class PostService {
    private readonly posts: Post[] = [];
    private idCounter = 1;

    create(createPostDto: CreatePostDto): Post {
        const post: Post = {
            id: this.idCounter++,
            ...createPostDto,
        };
        this.posts.push(post);
        return post;
    }

    findAll(): Post[] {
        return this.posts;
    }

}
