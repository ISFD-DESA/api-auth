// task.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../model/v1/view-user.entity';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity], 'mysql'),         
  ],
  providers: [AuthService, AuthRepository],
  exports: [AuthRepository],
  controllers: [AuthController],
})
export class AuthModule { }
