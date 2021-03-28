interface IConfig {
  region: string;
  secretName: string;
  options: any;
}

const DEFAULT_REGION = "us-east-1";

const config = {
  dev: {
    secretName: "smiles-discover-prod",
  },
  stg: {
    secretName: "smiles-discover-prod",
  },
  prod: {
    secretName: "smiles-discover-prod",
  },
};

const currentConfig: IConfig = config[process.env.STAGE ?? "dev"];

currentConfig.region = currentConfig.region ?? DEFAULT_REGION;

export default currentConfig;
