import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const analyzeQuery = createStep({
  id: "analyze-query",
  description: "ユーザーの質問を分析する",
  inputSchema: z.object({
    query: z.string(),
  }),
  outputSchema: z.object({
    analyzedQuery: z.string(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData) return;
    return { analyzedQuery: `ユーザーの問いは${inputData.query}です` };
  },
});

const answer = createStep({
  id: "answer",
  description: "ユーザーの問いに対して回答する",
  inputSchema: z.object({
    analyzedQuery: z.string(),
  }),
  outputSchema: z.object({
    answer: z.string(),
  }),
  execute: async ({ inputData }) => {
    if (!inputData) return;
    return {
      answer: `ユーザーの問いは${inputData.analyzedQuery}です。そして回答はありません。`,
    };
  },
});

const wataruWorkflow = createWorkflow({
  id: "wataru-workflow",
  inputSchema: z.object({
    query: z.string(),
  }),
  outputSchema: z.object({
    answer: z.string(),
  }),
})
  .then(analyzeQuery)
  .then(answer);

wataruWorkflow.commit();

const run = await wataruWorkflow.createRun();
const result = await run.start({
  inputData: { query: "hello" },
});
console.log(result.steps["analyze-query"]);
