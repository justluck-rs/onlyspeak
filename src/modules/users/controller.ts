import { FastifyRequest } from "fastify";
import { CreateUserBody } from "./user.interface";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService,) {}

  async listUsers() {
    return this.userService.listUsers();
  }

  async createUser(request: FastifyRequest) {
    const body = request.body as CreateUserBody;
    return this.userService.createUser(body);
  }
}