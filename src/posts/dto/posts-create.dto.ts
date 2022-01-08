import { ApiProperty } from "@nestjs/swagger"

export class CreatePostsDto {
       @ApiProperty()
       id: number

       @ApiProperty({ required: false })
       views?: number

       @ApiProperty()
       title: string

       @ApiProperty()
       description: string
}