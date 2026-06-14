import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const webFetchTool = createTool({
  id: "webFetch",
  description: "ユーザーから与えられたURL先のWebページのテキストを取得する",
  inputSchema: z.object({
    url: z.string().url(),
  }),
  outputSchema: z.object({
    text: z.string(),
  }),
  execute: async ({ url }) => {
    const response = await fetch(url);
    const text = await response.text();
    return { text };
  },
});
