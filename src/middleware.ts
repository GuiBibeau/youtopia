import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";
import { generateUUIDv4 } from "./lib/uuid";
import { GOOGLE_COOKIE_NAME } from "./lib/google/config";
import { getTokensFromGoogle } from "./lib/google/googleTokenFetch";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  await supabase.auth.getSession();
  const hasConversationIdCookie = req.cookies.has("youtopiaConversasionId");

  if (!hasConversationIdCookie) {
    const id = generateUUIDv4();
    await supabase.from("conversations").upsert({
      id,
    });
    res.cookies.set("youtopiaConversasionId", id, {
      sameSite: "strict",
      secure: true,
    });
  }

  if (req.nextUrl.pathname.startsWith('/dashboard/token')) {
      const code = req.nextUrl.searchParams.get('code')
      const cookie = req.cookies.get(GOOGLE_COOKIE_NAME)
      
      if(code && !cookie) {
        const tokens = await getTokensFromGoogle(code)

        res.cookies.set(GOOGLE_COOKIE_NAME, JSON.stringify(tokens), {
          sameSite: "strict",
          secure: true,
        });
      }

  }

  return res;
}
