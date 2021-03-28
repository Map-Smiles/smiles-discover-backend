import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "smiles-discover-backend",

  frameworkVersion: "2",

  custom: {
    stage: "${opt:stage, 'local'}",

    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },

    secrets: {
      dev:
        "arn:aws:secretsmanager:us-east-1:*:secret:smiles-discover-prod-VX9igL",
      stg:
        "arn:aws:secretsmanager:us-east-1:*:secret:smiles-discover-prod-VX9igL",
      prod:
        "arn:aws:secretsmanager:us-east-1:*:secret:smiles-discover-prod-VX9igL",
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
        Resource: "${self:custom.secrets.${self.custom.stage}}",
      },
    ],
  },

  functions: {
    default: {
      handler: "src/handler.default",
      events: [
        {
          http: { method: "get", path: "/health-check", cors: true },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
