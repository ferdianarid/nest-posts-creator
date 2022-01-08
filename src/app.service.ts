import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello World!';
	}
	sayName(): string {
		return "Hello, My name is Ferdian"
	}
}
