import "reflect-metadata";

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";

import app from "./app";
import config from "./config";
import { getSecretValue } from "./helpers/SecretsManager";

export default async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    console.log(process.env.STAGE);
    // const secrets = await getSecretValue(config.region, { json: true });

    return serverless(app)(event, context);
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
