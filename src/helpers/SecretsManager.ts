import { SecretsManager } from "aws-sdk";

interface IGetValueOptions {
  version?: string;
  json?: boolean;
}

interface ISecret {
  mongo_url: string;
}

const secretsManager = new SecretsManager({ region: "us-east-1" });

export async function getSecretValue(
  secretId: string,
  options: IGetValueOptions
): Promise<ISecret> {
  const secret = await secretsManager
    .getSecretValue({
      SecretId: secretId,
      VersionStage: options.version,
    })
    .promise();

  return (
    secret.SecretBinary ??
    (options.json ? JSON.parse(secret.SecretString) : secret.SecretString)
  );
}
