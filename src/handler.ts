import "reflect-metadata";

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";

import * as factory from "@factories";
import { getSecretValue, lambdaUnexpectedError } from "@helpers";
import container from "@helpers/container";
import { LambdaResponse } from "@interfaces";

import app from "./app";
import config from "./config";

async function bootstrap() {
  console.info("🔧 Bootstrapping the application...");

  const secrets = await getSecretValue(config.secretName, { json: true });

  container.cache = factory.cache();
  container.db = await factory.database(secrets.mongo_url);
}

export default async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<LambdaResponse> => {
  try {
    if (!container.db || !container.db?.isConnected) await bootstrap();
    return serverless(app)(event, context);
  } catch (err) {
    return lambdaUnexpectedError(err);
  }
};
