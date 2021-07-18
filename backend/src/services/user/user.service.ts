import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async findById(id): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async create(name: string): Promise<User> {
    return this.userRepository.create({ name });
  }
}
