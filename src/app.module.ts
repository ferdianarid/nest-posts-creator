import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

require("dotenv/config")

@Module({
	imports: [PostsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
