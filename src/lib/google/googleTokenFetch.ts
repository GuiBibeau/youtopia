import { googleOAuthConfig } from "./config";
import { getErrorMessage } from '../error'

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

    console.log(tokenRequest)



    const tokens = await tokenRequest.json();
    return tokens;
  } catch (error) {
    const message = getErrorMessage(error)
    console.error(message);
    return null;
  }
};
