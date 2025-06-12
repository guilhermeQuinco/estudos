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
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserService } from '../../user.service';
import { CreateUserUseCase } from '../../application/use-cases/create-user';

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  // @Get()
  // async findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.userService.findOne(id);
  // }

  @Post()
  async handle(@Body() body: any) {
    return this.createUserUseCase.execute(body);
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
