import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostsDto } from './dto/posts-create.dto';
import { Posts } from './entity/posts.entities';
import { PostsService } from "./posts.service"

@Controller('posts')
export class PostsController {
       constructor(private postsServices: PostsService) { }

       @Get()
       getPosts(): Posts[] {
              return this.postsServices.findAllPosts()
       }

       @Get(":id")
       getPostsById(@Param("id") id: string): Posts {
              return this.postsServices.findPostsById(Number(id))
       }

       @Post()
       createPost(@Body() body: CreatePostsDto): Posts {
              return this.postsServices.createPosts(body)
       }
}
