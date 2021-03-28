import {
  APIGatewayProxyResult,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";

export interface IHttpResponse {
  statusCode: number;
  headers?: any;
  body: string;
}

export type LambdaResponse =
  | IHttpResponse
  | APIGatewayProxyResult
  | APIGatewayProxyStructuredResultV2;
