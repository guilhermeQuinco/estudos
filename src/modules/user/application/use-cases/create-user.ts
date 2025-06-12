import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserDto } from '../../interfaces/http/dto/create-user.dto';
import { User } from '../../domain/entity/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(createUser: CreateUserDto): Promise<void> {
    const user = User.create(createUser);
    await this.userRepository.create(user);
  }
}
