import { IsEmail, IsNotEmpty, Length, Max, Min } from 'class-validator';

export class CreateUserDto {


  @IsNotEmpty()
  @Length(10, 20)
  firstName: string;
  lastName: string;
  @IsEmail() email: string;
  phonenumber: string;
  @Min(10) @Max(100) age: number;
  @IsNotEmpty() @Length(8, 20) password: string;
}
