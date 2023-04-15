import { google } from "googleapis";
import { googleOAuthConfig } from "./config";

export const oauth2Client = new google.auth.OAuth2(
  googleOAuthConfig.clientId,
  googleOAuthConfig.clientSecret,
  googleOAuthConfig.redirectUrl
);

// Access scopes for read-only Drive activity.
const scopes = ["https://www.googleapis.com/auth/youtube"];

/**
 * This function generates an OAuth2 authorization URL with specified scopes and granted scopes.
 */
export const get0AuthUrl = () =>
  oauth2Client.generateAuthUrl({
    scope: scopes,
    access_type: "offline",
    include_granted_scopes: true,
  });
