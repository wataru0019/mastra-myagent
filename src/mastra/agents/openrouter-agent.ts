import { Agent } from "@mastra/core/agent";

export const openrouterAgent = new Agent({
  id: "openrouter-agent",
  name: "OpentRouter Agent",
  instructions: "OpenRouterを使ったエージェントです。",
  model: "openrouter/openai/gpt-5.4-nano",
});
