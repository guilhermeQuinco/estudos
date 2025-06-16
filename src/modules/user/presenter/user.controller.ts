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

@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private fetchAllUsersUseCase: FetchAllUsersUseCase,
    private findByIdUseCase: FindByIdUserUseCase,
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

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() body: any) {
  //   return this.userService.update(id, body);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.userService.delete(id);
  // }
}
