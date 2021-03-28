interface IConfig {
  region: string;
  secretName: string;
  options: any;
}

const DEFAULT_REGION = "us-east-1";

const config = {
  dev: {
    secretName: "DEV_SmilesDiscover",
  },
  stg: {
    secretName: "PRD_SmilesDiscover",
  },
  prod: {
    secretName: "PRD_SmilesDiscover",
  },
};

const currentConfig: IConfig = config[process.env.STAGE ?? "dev"];

currentConfig.region = currentConfig.region ?? DEFAULT_REGION;

export default currentConfig;
