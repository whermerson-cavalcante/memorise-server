import { getRepository, Repository } from 'typeorm'

import { IUsersRepository } from "./IUsersRepository";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    username,
    email,
    password,
  }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      email,
      password
    });

    return this.repository.save(user)
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        username
      }
    });

    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email
      }
    });

    return user
  }
  
}