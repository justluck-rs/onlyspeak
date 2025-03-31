import { CreateUserBody } from "./user.interface";
import { UserRepository } from "./user.repository";
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async listUsers() {
    return this.userRepository.findAllUsers();
  }

  async createUser(user: CreateUserBody) {
    return this.userRepository.createUser(user);
  }
}
