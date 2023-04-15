import { googleOAuthConfig } from "./config";

export const getTokensFromGoogle = async (code: string) => {
  try {
    const url = "https://oauth2.googleapis.com/token";
    const data = new URLSearchParams({
      code: code,
      client_id: googleOAuthConfig.clientId,
      client_secret: googleOAuthConfig.clientSecret,
      redirect_uri: googleOAuthConfig.redirectUrl,
      grant_type: "authorization_code",
    });

    const tokenRequest = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });

    if (!tokenRequest.ok) {
      throw new Error(
        `Token request failed with status ${tokenRequest.status}`
      );
    }

    const tokens = await tokenRequest.json();
    return tokens;
  } catch (error) {
    console.log(error);
    console.error("Error in getTokens:", error);
    return null;
  }
};
