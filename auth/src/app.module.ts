import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { JwtStrategy } from './app.jwt.strategy';
import { AppService } from './app.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ClientsModule.register([{
    name: 'USER_CLIENT',
    transport: Transport.TCP,
    options:{
      host: 'localhost',
      port: 4010,
    }
  }
]), JwtModule.register({
  secret: 'yoursecret',
  signOptions: {expiresIn: '60s'},
})],
controllers: [AppController],
  providers: [AppService, LocalStrategy],
})
export class AppModule {}
