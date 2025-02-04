import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";

const PROMPT =
  process.env.NEXT_PUBLIC_PROMPT || "Act as Darius from Atlanta (FX)";

// Set runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!messages) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    maxTokens: 125,
    messages: [
      {
        role: "system",
        content: PROMPT,
      },
      ...messages,
    ],

    temperature: 1.2, // Higher temperature means more randomness
  });

  return result.toDataStreamResponse();
}
