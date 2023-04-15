import { oauth2Client } from "@/lib/google/google0Auth2";
import { redirect } from "next/navigation";
import Iron from "@hapi/iron";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const code = searchParams.get("code");

    if (!code) {
      return Response.redirect(new URL("/", request.url), 302);
    }

    let { tokens } = await oauth2Client.getToken(code);

    const sealed = await Iron.seal(
      tokens,
      process.env.SESSION_COOKIE_PASSWORD!,
      Iron.defaults
    );

    return new Response("ok", {
      status: 200,
      headers: { "Set-Cookie": `${process.env.SESSION_COOKIE_NAME}=${sealed}` },
    });
  } catch (e) {
    console.log(e);
    return new Response(e);
  }
}
