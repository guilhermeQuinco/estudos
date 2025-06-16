import { IsNotEmpty, IsUUID } from 'class-validator';

export type UpdateUserConstructorProps = {
  id: string;
  name: string;
};

export class UpdateUserInput {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  name: string;

  constructor(props: UpdateUserConstructorProps) {
    if (!props) return;
    this.id = props.id;
    this.name = props.name;
  }
}
