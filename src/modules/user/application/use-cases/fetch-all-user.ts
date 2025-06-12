import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { CreateUserDto } from '../../interfaces/http/dto/create-user.dto';
import { User } from '../../domain/entity/user.entity';

@Injectable()
export class FetchAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[] | null> {
    const users = await this.userRepository.findAll();
    return users;
  }
}
