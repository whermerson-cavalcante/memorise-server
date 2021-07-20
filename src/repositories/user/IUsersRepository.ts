import { User } from "../../entities/User";
import { CreateUserDTO } from '../../dtos/CreateUserDTO'

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>
  findByUsername(username: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
}