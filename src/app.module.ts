import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { validateSchemaDB } from './config.db.schema';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: validateSchemaDB,
    }),
    TypeOrmModule.forRoot({
      name: 'mysql',
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        'dist/model/v1/*.entity{.ts,.js}',
        'dist/model/*.entity{.ts,.js}',
        'dist/model/*.view{.ts,.js}',
        './model/*.entity{.ts,.js}',
      ],
      synchronize: false,
      retryDelay: 3000,
      autoLoadEntities: false,
    }),
    AuthModule,
  ],
})
export class AppModule { }
