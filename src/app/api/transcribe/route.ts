import { openai } from "@/lib/openAi";
import fs from "fs/promises";

export async function POST(request: Request) {
  const data = await request.formData();
  const fileBlob = data.get("file");


  // const req = await fetch("https://api.openai.com/v1/audio/transcriptions", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     file: fileBlob,
  //     model: "whisper-1",
  //   }),
  // });

    // const res = await req.json(  );

  return new Response("File processed", { status: 200 });
}

