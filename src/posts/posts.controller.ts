import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dto/posts-create.dto';
import { Posts } from './entity/posts.entities';
import { PostsService } from "./posts.service"

@ApiTags("Posts")
@Controller('posts')
export class PostsController {
       constructor(private postsServices: PostsService) { }

       @ApiOkResponse({ type: Posts, isArray: true })
       @Get()
       getPosts(@Query("title") title: string): Posts[] {
              return this.postsServices.findAllPosts(title)
       }

       @ApiOkResponse({ type: Posts, description: "Selected Posts" })
       @Get(":id")
       getPostsById(@Param("id") id: string): Posts {
              return this.postsServices.findPostsById(Number(id))
       }

       @ApiCreatedResponse({ type: Posts })
       @Post()
       createPost(@Body() body: CreatePostsDto): Posts {
              return this.postsServices.createPosts(body)
       }
}
