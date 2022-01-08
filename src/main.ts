import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common"

require("dotenv/config")
const PortRunning = process.env.LOCAL_PORT

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(5000);

	Logger.log(`Server Running on port ${PortRunning}`, "Nest Application")
}

bootstrap();
