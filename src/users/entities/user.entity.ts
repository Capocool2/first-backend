import { Role } from 'src/auth/enums/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, Generated, PrimaryColumnCannotBeNullableError } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  //uno de estos dos hay que eliminar
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
password: string;

  @Column()
  phonenumber: string;
  
  @Column()
  age: number;

  @Column({ type: 'enum', enum: Role, default: Role.User })
role: Role;

  


  
}
