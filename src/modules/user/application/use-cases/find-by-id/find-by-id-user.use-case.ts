import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User, UserId } from '../../../domain/entity/user.entity';
import { UserOutput, UserOutputMapper } from '../../common/user-output';

@Injectable()
export class FindByIdUserUseCase {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async execute(id: UserId): Promise<UserOutput> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return UserOutputMapper.toOutput(user);
  }
}
