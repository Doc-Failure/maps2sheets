import { IsEmail } from 'class-validator';

export class CreateGUserDto {
  @IsEmail()
  public email: string;
}
