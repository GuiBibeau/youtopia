import { openai } from "./openAi";

/**
 * It takes a base64 string, content type, and file name, and downloads the file to the user's computer
 * @param {string} base64 - The base64 string of the file you want to download
 * @param {string} contentType - The content type of the file.
 * @param {string} fileName - The name of the file you want to download.
 */
export const downloadFileFromBase64 = async (
  base64: string,
  contentType: string,
  fileName: string
) => {
  //extract file extension from content type
  const fileExtension = contentType.split("/")[1];
  // Convert base64 audio to ArrayBuffer
  const audioData = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

  // Create a Blob and download link
  const blob = new Blob([audioData], { type: contentType! });
  const file = new File([blob], `${fileName}.${fileExtension}`);

  const test = await openai.createTranscription(file, "whisper-1");
};
