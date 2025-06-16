import { Inject } from '@nestjs/common';
import { UserId } from 'src/modules/user/domain/entity/user.entity';
import { UserRepository } from 'src/modules/user/domain/repositories/user.repository';
import { UserOutput, UserOutputMapper } from '../../common/user-output';

export class DeleteUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}
  async execute(id: UserId): Promise<UserOutput> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error('No user found ');
    }

    await this.userRepository.delete(id);

    return UserOutputMapper.toOutput(user);
  }
}
