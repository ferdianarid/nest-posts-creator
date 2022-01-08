import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

require("dotenv/config")
const PortRunning = process.env.LOCAL_PORT

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configs = new DocumentBuilder()
		.setTitle("Nest Posts API")
		.setDescription("Application Programming Interface for Web Posts Creator")
		.setVersion("1.0.0")
		.build()

	const documents = SwaggerModule.createDocument(app, configs)
	SwaggerModule.setup("/apis", app, documents)

	await app.listen(5000);

	Logger.log(`Server Running on port ${PortRunning}`, "Nest Application")
}

bootstrap();
