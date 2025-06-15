import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/entity/user.entity';

@Injectable()
export class FetchAllUsersUseCase {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async execute(): Promise<User[] | null> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
