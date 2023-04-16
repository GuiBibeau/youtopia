import ytdl from "ytdl-core";

export async function getAudioBuffer(url: string): Promise<Buffer> {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the audio stream
      const audioStream = ytdl(url, {
        quality: "highestaudio",
        filter: "audioonly",
      });

      
      // Collect audio data into an array of chunks
      const chunks: Uint8Array[] = [];
      audioStream.on("data", (chunk) => {
        chunks.push(chunk);
      });
      
      // Combine chunks into a single buffer once the stream ends
      audioStream.on("end", () => {
        const audioBuffer = Buffer.concat(chunks);
        resolve(audioBuffer);
      });

      // Handle stream errors
      audioStream.on("error", (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}
