import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const e = {
  api: publicRuntimeConfig.api as string,
};

export default e;
