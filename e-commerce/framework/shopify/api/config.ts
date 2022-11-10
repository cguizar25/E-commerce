import { fetchAPI } from "../utils/index";

class Config {
  private config: any

  constructor(config: any) {
    this.config = config
  }

  getConfig(): any {
    return this.config
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchAPI
});

export function getConfig() {
  return configWrapper.getConfig()
};
