import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/user/UsersRepository'

import { hash } from 'bcryptjs'

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export class CreateUserService {
  async execute({ 
    name, 
    username, 
    email, 
    password, 
    confirm_password
  }: IRequest): Promise<User> {
    const usersRepository = new UsersRepository()

    const checkedUsername = await usersRepository.findByUsername(username);
    const checkedEmail = await usersRepository.findByEmail(email);

    if(checkedUsername && checkedEmail)
      throw new Error('This  username and email are already in use.');
    if(checkedUsername && !checkedEmail)
      throw new Error('This username is already in use.');
    if(!checkedUsername && checkedEmail)
      throw new Error('This email is already in use.') ;


    if (!confirm_password || confirm_password !== password)
      throw new Error("Password does not match.")

    const hashedPassword = await hash(password, 10);

    const user = await usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword
    });

    return user
  }
}