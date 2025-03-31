import { FastifyTypedInstance } from "../types/types";
import { Routes } from "../routes/api";
import { initializeDependencies } from "./dependencies";

export async function setupServer(app: FastifyTypedInstance) {
  const { userController } = initializeDependencies();

  const routes = new Routes(app, userController);
  await routes.register();

  return app;
} 