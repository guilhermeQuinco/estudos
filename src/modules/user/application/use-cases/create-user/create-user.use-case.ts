import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/entity/user.entity';
import { v4 as uuid } from 'uuid';
import { CreateUserInput } from './create-user.input';
import { UserOutput, UserOutputMapper } from '../../common/user-output';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}
  async execute(createUser: CreateUserInput): Promise<UserOutput> {
    const user = User.create(createUser);
    await this.userRepository.create(user);

    return UserOutputMapper.toOutput(user);
  }
}
