import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from "./config/config.json"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  await app.listen(config.server.port);
}
bootstrap();
