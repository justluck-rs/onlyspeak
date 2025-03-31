import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { FastifyTypedInstance } from "../types/types";

export async function createFastifyInstance(): Promise<FastifyTypedInstance> {
  const app = fastify().withTypeProvider<ZodTypeProvider>();

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  await app.register(fastifyCors, {
    origin: "*",
  });

  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "OnlySpeak API",
        description: "API para o OnlySpeak",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  });

  return app as FastifyTypedInstance;
} 