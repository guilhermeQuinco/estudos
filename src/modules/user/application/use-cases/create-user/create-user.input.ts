import { IsNotEmpty, IsString } from 'class-validator';

export type CreateUserInputConstructorProps = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(props: CreateUserInputConstructorProps) {
    if (!props) return;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }
}
