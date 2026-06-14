import { Mastra } from "@mastra/core/mastra";
import { CloudflareDeployer } from "@mastra/deployer-cloudflare";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { generalAgent } from "./agents/general-agent";
import { openrouterAgent } from "./agents/openrouter-agent";

export const mastra = new Mastra({
  deployer: new CloudflareDeployer({
    name: "mastra-my-agent",
  }),
  workflows: { weatherWorkflow },
  agents: { weatherAgent, generalAgent, openrouterAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
