import { getAudioBuffer } from "@/lib/serverUtils";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    console.log(`downloading video from ${url}`);

    if (!url) {
      return new Response("No URL provided", { status: 400 });
    }

    //  Get the audio buffer
    const audioBuffer = await getAudioBuffer(url);

    console.log("after audio buffer");

    // Convert the audio buffer to a base64 encoded string
    const base64Audio = audioBuffer.toString("base64");

    console.log("after base 64 audio");

    return new Response(base64Audio, {
      headers: {
        // Set the content type according to the original audio format, e.g., 'audio/webm' or 'audio/mp4'
        "Content-Type": "audio/webm",
      },
    });
  } catch (e) {
    console.log(e)
    return new Response(e)
  }
}
