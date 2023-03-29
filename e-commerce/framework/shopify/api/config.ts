import { ApiConfig } from "@common/types/api";
import { fetchAPI } from "../utils/index";

class Config {
  private config: ApiConfig

  constructor(config: ApiConfig) {
    this.config = config
  }

  getConfig(): ApiConfig {
    return this.config
  }
}

const configWrapper = new Config({
  fetch: fetchAPI
});

export function getConfig() {
  return configWrapper.getConfig()
};
