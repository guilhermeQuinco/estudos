import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User, UserId } from '../../../domain/entity/user.entity';
import { UserOutput, UserOutputMapper } from '../../common/user-output';
import { UpdateUserInput } from './update-user.input';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private userRepository: UserRepository,
  ) {}

  async execute(updateUserDto: UpdateUserInput): Promise<UserOutput> {
    const existingUser = await this.userRepository.findById(
      new UserId(updateUserDto.id),
    );

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    existingUser.update(updateUserDto.name);
    await this.userRepository.update(existingUser);

    return UserOutputMapper.toOutput(existingUser);
  }
}
