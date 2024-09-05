import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './config.interceptors';

async function bootstrap(): Promise<void> {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  //app.setGlobalPrefix('/api-rapidatos');

  const config = new DocumentBuilder()
    .setTitle('api-auth')
    .setDescription(
      'API-AUTH es un microservicio para autenticacion de usuarios.',
    )
    .setVersion('1.0')
    .addTag('api-auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
