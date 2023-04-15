import { config } from "../config";

export const googleOAuthConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    redirectUrl: `${config.url}/dashboard/token`
}

export const GOOGLE_COOKIE_NAME = 'youtopia-google-oauth'