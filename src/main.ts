import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MainModule } from './main/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const options = new DocumentBuilder()
    .setTitle('Chat And Calling App')
    .setDescription('Chat App Description')
    .setVersion('1.0')
    .addTag('Chat, Calling App')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
