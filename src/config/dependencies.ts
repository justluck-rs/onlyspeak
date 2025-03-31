import { UserController } from "../modules/users/controller";
import { UserService } from "../modules/users/user.service";
import { UserRepository } from "../modules/users/user.repository";

export function initializeDependencies() {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  return {
    userController,
  };
} 