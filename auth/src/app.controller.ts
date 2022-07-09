import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGaurd } from './local-auth.guard';
import { Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('auth')
  async login(@Request() req){
    return this.appService.login(req.user);
    }
}
