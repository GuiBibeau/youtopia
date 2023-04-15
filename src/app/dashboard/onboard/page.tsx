import { Login } from "./LogIn";
import { getMagicLinkCompletion } from "@/lib/completions/magic-link";

import { get0AuthUrl } from "@/lib/google/google0Auth2";


import { getTextStreamFromResponse } from "@/lib/stream";

export default async function Page() {

  const authLink = get0AuthUrl();
  let message = "";
  const res = await getMagicLinkCompletion();
  const stream = getTextStreamFromResponse(res);

  const reader = stream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    message = message + value;
  }
  return (
    <>
      <Login text={message} link={authLink} />
    </>
  );
}
