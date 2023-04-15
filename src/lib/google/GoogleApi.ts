import { googleOAuthConfig } from "./config";
import { z } from "zod";
import { youtubeChannelListResponseSchema } from './types'


export class GoogleApi {
  private static accessToken: string | null = null;

  static setAccessToken(token: string): void {
    this.accessToken = token;
  }

  static async fetch(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    if (!this.accessToken) {
      throw new Error(
        "Access token not set. Call GoogleApi.setAccessToken() first."
      );
    }
    console.log(this.accessToken);

    const defaultHeaders: HeadersInit = {
      Authorization: `Bearer ${this.accessToken}`,
    };

    options.headers = {
      ...defaultHeaders,
      ...(options.headers || {}),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static async getChannelInfo() {
    const apiUrl =
      "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true";

    try {
      const response = await this.fetch(apiUrl);
      const data = await response.json();
      return youtubeChannelListResponseSchema.parse(data)
    } catch (error) {
      console.log(error);
      console.error("Failed to fetch channel info:", error);
      return null
    }
  }

  static async getTokensFromGoogle(code: string): Promise<any | null> {
    console.log("get tokens");
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
      console.error("Error in getTokensFromGoogle:", error);
      return null;
    }
  }
}
