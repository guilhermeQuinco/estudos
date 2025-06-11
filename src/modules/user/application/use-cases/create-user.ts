import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: CreateUserInput): Promise<void> {
    await this.userRepository.create(user);
  }
}
