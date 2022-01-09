import { ApiProperty } from "@nestjs/swagger"
import { MaxLength, MinLength } from "class-validator"

export class CreatePostsDto {
       @ApiProperty()
       id: number

       @ApiProperty({ required: false })
       views?: number

       @ApiProperty()
       @MinLength(10)
       @MaxLength(30)
       title: string

       @ApiProperty()
       @MaxLength(250)
       description: string
}