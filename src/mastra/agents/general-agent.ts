import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { webFetchTool } from "../tools/webfetch-tool";

export const generalAgent = new Agent({
  id: "general-agent",
  name: "general-agent",
  instructions: `
  あなたは汎用エージェントです。
  ユーザーの問いに対し、モデルの持つ知識の中から回答しなさい。`,
  model: "openai/gpt-5.4-nano",
  tools: {
    webFetch: webFetchTool,
  },
  // memory: new Memory(),
});
