import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "smiles-discover-backend",

  frameworkVersion: "2",

  custom: {
    stage: "${opt:stage, 'dev'}",

    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },

    secrets: {
      dev:
        "arn:aws:secretsmanager:us-east-1:*:secret:DEV_SmilesDiscover-DkX6z4",
      stg:
        "arn:aws:secretsmanager:us-east-1:*:secret:PRD_SmilesDiscover-abt84W",
      prod:
        "arn:aws:secretsmanager:us-east-1:*:secret:PRD_SmilesDiscover-abt84W",
    },
  },

  plugins: ["serverless-webpack", "serverless-offline"],

  provider: {
    name: "aws",
    region: "us-east-1",
    runtime: "nodejs14.x",
    lambdaHashingVersion: "20201221",
    timeout: 10,
    memorySize: 512,

    stage: "${self:custom.stage}",
    stackName: "${self:service}-${self:custom.stage}",
    stackTags: {
      STACK: "${self:service}",
      STAGE: "${self:custom.stage}",
    },

    deploymentBucket: {
      name: "smiles-discover-serverless",
      blockPublicAccess: true,
    },

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },

    environment: {
      STAGE: "${self:custom.stage}",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },

    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: "secretsmanager:GetSecretValue",
        Resource: "${self:custom.secrets.${self:custom.stage}}",
      },
    ],
  },

  functions: {
    default: {
      handler: "src/handler.default",
      events: [
        { http: { method: "get", path: "/health-check", cors: true } },

        { http: { method: "get", path: "/actions", cors: true } },
        { http: { method: "get", path: "/actions/{id}", cors: true } },

        { http: { method: "get", path: "/goals", cors: true } },
        { http: { method: "get", path: "/goals/{id}", cors: true } },
        { http: { method: "put", path: "/goals/{id}", cors: true } },
        { http: { method: "post", path: "/goals", cors: true } },

        { http: { method: "get", path: "/interactions", cors: true } },
        { http: { method: "get", path: "/interactions/{id}", cors: true } },
        { http: { method: "put", path: "/interactions/{id}", cors: true } },
        { http: { method: "post", path: "/interactions", cors: true } },

        { http: { method: "get", path: "/pockets", cors: true } },
        { http: { method: "get", path: "/pockets/{id}", cors: true } },
        { http: { method: "put", path: "/pockets/{id}", cors: true } },
        { http: { method: "post", path: "/pockets", cors: true } },

        { http: { method: "get", path: "/spots", cors: true } },
        { http: { method: "get", path: "/spots/{id}", cors: true } },

        { http: { method: "get", path: "/users", cors: true } },
        { http: { method: "get", path: "/users/spots", cors: true } },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
