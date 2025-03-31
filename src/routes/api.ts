import { FastifyTypedInstance } from "../types/types";
import { UserController } from "../modules/users/controller";
import { createUserBodySchema } from "../modules/users/user.interface";

export class Routes {
  constructor(
    private readonly app: FastifyTypedInstance,
    private readonly userController: UserController
  ) {}

  async register(): Promise<void> {
    await this.registerUserRoutes();
  }

  private async registerUserRoutes(): Promise<void> {
    this.app.get("/users", {
      schema: {
        tags: ["users"],
        summary: "List all users",
        description: "List all users",
      },
    }, this.userController.listUsers.bind(this.userController));

    this.app.post("/users", {
      schema: {
        tags: ["users"],
        summary: "Create a new user",
        body: createUserBodySchema,
      },
    }, this.userController.createUser.bind(this.userController));
  }
}