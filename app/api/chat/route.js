import { character } from "@/constant/character";
import { Groq } from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { message, characterId } = body;

    if (!message || !characterId) {
      return new NextResponse(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    const characters = character.find((char) => char.id === characterId);
    if (!characters) {
      return new NextResponse(
        JSON.stringify({ error: "Character not found" }),
        { status: 404 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: characters.prompt },
        { role: "user", content: message },
      ],
      model: "llama3-8b-8192",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    if (
      !chatCompletion ||
      !chatCompletion.choices ||
      chatCompletion.choices.length === 0
    ) {
      return new NextResponse(
        JSON.stringify({ error: "No response from AI" }),
        { status: 500 }
      );
    }

    return NextResponse.json({
      resp: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
