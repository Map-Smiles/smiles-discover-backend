import "reflect-metadata";

import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";

import app from "./app";

export default async (event: APIGatewayProxyEvent, context: Context) => {
  try {
    return serverless(app)(event, context);
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
