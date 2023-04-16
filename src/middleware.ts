import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { GOOGLE_COOKIE_NAME } from "./lib/google/config";
import { getTokensFromGoogle } from "./lib/google/googleTokenFetch";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

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
