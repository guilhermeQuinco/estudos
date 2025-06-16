import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserUseCase } from '../application/use-cases/create-user/create-user.use-case';
import { FetchAllUsersUseCase } from '../application/use-cases/find-all/fetch-all-user.use-case';
import { CreateUserInput } from '../application/use-cases/create-user/create-user.input';
import { UserPresenter } from './user.presenter';
import { FindByIdUserUseCase } from '../application/use-cases/find-by-id/find-by-id-user.use-case';
import { UserId } from '../domain/entity/user.entity';
import { UpdateUserUseCase } from '../application/use-cases/update-user/update-user.use-case';
import { DeleteUserUseCase } from '../application/use-cases/delete-user/delete-user.use-case';

@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private fetchAllUsersUseCase: FetchAllUsersUseCase,
    private findByIdUseCase: FindByIdUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Get()
  async findAll() {
    const userList = await this.fetchAllUsersUseCase.execute();
    return userList.map((user) => new UserPresenter(user));
  }

  @Get(':id')
  async findById(@Param('id') id: UserId) {
    const user = await this.findByIdUseCase.execute(id);

    return new UserPresenter(user);
  }

  @Post()
  async handle(@Body() createUserDto: CreateUserInput) {
    const user = await this.createUserUseCase.execute(createUserDto);
    return new UserPresenter(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: { name: string }) {
    const output = await this.updateUserUseCase.execute({
      id,
      name: body.name,
    });

    return new UserPresenter(output);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.deleteUserUseCase.execute(new UserId(id));
  }
}
