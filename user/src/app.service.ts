import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, FindOneOptions } from 'typeorm';
import { User } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async findOne(query: any): Promise<User> {
    return this.userRepository.findOneBy(query);
    
  }


  async createUser(user: any): Promise<InsertResult> {
    try {
      /**
       * Perform all needed checks
       */

      const userEntity = this.userRepository.create(user);

      const res = await this.userRepository.insert(userEntity);

      //  Logger.log('createUser - Created user');

      return res;
    } catch (e) {
      // Logger.log(e);
      throw e;
    }
  }
}
