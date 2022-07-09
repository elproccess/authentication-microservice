import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {User} from './app.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([User]),
    ],
    providers: [AppService],
    controllers: [AppController],
  })
  export class UserModule {}