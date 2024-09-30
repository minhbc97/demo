import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  age: number;

  @IsEmail()
  email: string;

  password: string;

  accountType: String;

  isActive: boolean;

  codeId: string;

  codeExpiredAt: Date;
}
