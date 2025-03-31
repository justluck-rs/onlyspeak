import { createFastifyInstance } from "./config/fastify";
import { setupServer } from "./config/server";

async function bootstrap() {
  const app = await createFastifyInstance();
  await setupServer(app);
  
  await app.listen({ port: 3333 });
  console.log("HTTP Server Running!");
}

bootstrap().catch(console.error);
