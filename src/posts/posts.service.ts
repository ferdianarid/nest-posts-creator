import { Injectable } from '@nestjs/common';
import { CreatePostsDto } from './dto/posts-create.dto';
import { Posts } from './entity/posts.entities';

@Injectable()
export class PostsService {
       private posts: Posts[] = [
              {
                     id: 22,
                     views: 2245,
                     title: "Facebook Meta",
                     description: "Facebook provide a AR and VR"
              },
              {
                     id: 86,
                     views: 4245,
                     title: "Apple Developer",
                     description: "Apple Developer go to Singapore"
              },
              {
                     id: 75,
                     views: 3445,
                     title: "Indonesia Football",
                     description: "Indonesia going to Final"
              },
              {
                     id: 122,
                     views: 2245,
                     title: "Augmented Reality Engine",
                     description: "Indonesia in World Cup"
              },
              {
                     id: 95,
                     views: 8345,
                     title: "Ferdian with Laptops",
                     description: "Ferdian is program writers"
              }
       ]

       findAllPosts(): Posts[] {
              return this.posts
       }

       findPostsById(postsId: number): Posts {
              return this.posts.find((post) => post.id === postsId)
       }

       createPosts(createPosts: CreatePostsDto): Posts {
              const RandomNumber = Math.floor(1000 + Math.random() * 9000)

              const PostCreated = {
                     id: Date.now(),
                     views: RandomNumber,
                     ...createPosts
                     // title: createPosts.title,
                     // description: createPosts.description
              }

              this.posts.push(PostCreated)
              return PostCreated
       }
}
