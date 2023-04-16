import { BotAvatar } from "@/components/atoms/BotAvatar/BotAvatar";
import { EventTrack } from "@/components/atoms/EventTrack";
import { GoogleApi } from "@/lib/google/GoogleApi";
import { GOOGLE_COOKIE_NAME } from "@/lib/google/config";
import { cookies } from "next/headers";
import { ChannelInfo } from "./ChannelInfo";
import { getChannelInfoCompletion } from "@/lib/completions/channel-info";
import { getTextStreamFromResponse } from "@/lib/stream";
import { GoogleApis } from "googleapis";

export default async function Page() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(GOOGLE_COOKIE_NAME)?.value;
  const { access_token } = JSON.parse(cookie!);

  GoogleApi.setAccessToken(access_token);
  const data = await GoogleApi.getChannelInfo();
  console.log(data)

  // if (data) {
  //   const uploadId = data.items[0].contentDetails.relatedPlaylists.uploads
  //   const test = await GoogleApi.GetChannelUploadsFromPlaylist(uploadId)
  //   console.log(test.items[0])
  // }


  let message = "";
  const res = await getChannelInfoCompletion(JSON.stringify(data));
  const stream = getTextStreamFromResponse(res);

  const reader = stream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    message = message + value;
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center min-h-[32px]">
        <div className="mr-4 text-lg leading-8 text-gray-300 ">
          <BotAvatar />
        </div>
        <ChannelInfo text={message} />
      </div>
      <EventTrack event="fetchVideos" />
    </div>
  );
}
