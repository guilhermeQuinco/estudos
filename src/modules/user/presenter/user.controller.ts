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

@Controller('users')
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private fetchAllUsersUseCase: FetchAllUsersUseCase,
  ) {}

  @Get()
  async findAll() {
    return this.fetchAllUsersUseCase.execute();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.userService.findOne(id);
  // }

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
