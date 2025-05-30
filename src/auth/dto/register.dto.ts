import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsInt,
  Min,
  Max,
  Length,
  Matches,
  IsMobilePhone,
} from 'class-validator';

export class RegisterDto {


  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 20)
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsMobilePhone()
  phonenumber: string;

  @IsNotEmpty()
  @IsInt()
  @Min(10)
  @Max(100)
  age: number;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
