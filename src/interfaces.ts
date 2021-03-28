import {
  APIGatewayProxyResult,
  APIGatewayProxyStructuredResultV2,
} from "aws-lambda";
import { Request, Response, NextFunction } from "express";

export interface IHttpResponse {
  statusCode: number;
  headers?: any;
  body: string;
}

export type LambdaResponse =
  | IHttpResponse
  | APIGatewayProxyResult
  | APIGatewayProxyStructuredResultV2;

interface IEnhancedRequest<T> extends Request {
  body: T;
}

export type middleware<T = any, R = any> = (
  req: IEnhancedRequest<T>,
  res: Response<R>,
  next: NextFunction
) => void;
