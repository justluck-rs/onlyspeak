import { createFastifyInstance } from "./config/fastify";
import { setupServer } from "./config/server";
import { logger } from "./utils/logger";

async function bootstrap() {
  const app = await createFastifyInstance();
  await setupServer(app);
  
  await app.listen({ port: 3333, host: '0.0.0.0' });
  logger.info("HTTP Server Running!");
}

bootstrap().catch(console.error);
