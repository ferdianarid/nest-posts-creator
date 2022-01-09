import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dto/posts-create.dto';
import { Posts } from './entity/posts.entities';
import { PostsService } from "./posts.service"

@ApiTags("Posts")
@Controller('posts')
export class PostsController {
       constructor(private postsServices: PostsService) { }

       @ApiOkResponse({ type: Posts, isArray: true })

       @ApiQuery({ name: 'title', required: false })
       @Get()
       getPosts(@Query("title") title?: string): Posts[] {
              return this.postsServices.findAllPosts(title)
       }

       @ApiOkResponse({ type: Posts, description: "Selected Posts" })

       @ApiNotFoundResponse()
       @Get(":id")
       getPostsById(@Param("id", ParseIntPipe) id: number): Posts {
              const SelectedPosts = this.postsServices.findPostsById(id)

              if (!SelectedPosts) {
                     throw new NotFoundException()
              }

              return SelectedPosts
       }

       @ApiCreatedResponse({ type: Posts })
       @Post()
       createPost(@Body() body: CreatePostsDto): Posts {
              return this.postsServices.createPosts(body)
       }
}
