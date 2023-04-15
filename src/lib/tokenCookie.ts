import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

export type AccessTokenInfo = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
};

export function parseTokenCookie(headersList: RequestCookies) {
  try {
    const header = headersList.get("yt-token");

    if (!header || !header.value) {
      return null;
    }

    const parsedToken: AccessTokenInfo = JSON.parse(header.value);

    return parsedToken;
  } catch (error) {
    console.error("Failed to extract access token:", error);
    return null;
  }
}
