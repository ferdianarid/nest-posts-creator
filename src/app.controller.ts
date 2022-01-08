import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	getHello: any;
	constructor(private readonly appService: AppService) { }

	@Get()
	users(): string {
		return this.appService.sayName();
	}
}
