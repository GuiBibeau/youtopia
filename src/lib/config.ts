type Config = {
  url: string;
  apiUrl: string;
  environment: string;
};

type Env = "development" | "preview" | "production";

type ConfigsMap = Record<Env, Config>;

/**
 * The function checks if a given string is a valid environment name.
 * @param {string | undefined} env - The `env` parameter is a string or undefined. It represents an
 * environment variable that is being checked for validity.
 * @returns The function `isEnv` returns a boolean value. It returns `true` if the `env` parameter is a
 * string and its value is either "development", "preview", or "production". Otherwise, it returns
 * `false`.
 */
const isEnv = (env: string | undefined): env is Env => {
  if (typeof env !== "string") {
    return false;
  }

  return env === "development" || env === "preview" || env === "production";
};

/**
 * This function returns the environment variable value of either NEXT_PUBLIC_VERCEL_ENV or NODE_ENV,
 * or "development" if neither are set.
 * @returns The function `getEnv` returns a string value representing the environment. The value is
 * determined by checking the `NEXT_PUBLIC_VERCEL_ENV` and `NODE_ENV` environment variables. If
 * `NEXT_PUBLIC_VERCEL_ENV` is set and matches one of the allowed values, it is returned. Otherwise, if
 * `NODE_ENV` is set and matches one of the allowed values, it is returned. If
 */
const getEnv = (): Env => {
  const { NEXT_PUBLIC_VERCEL_ENV, NODE_ENV } = process.env;

  console.log(NEXT_PUBLIC_VERCEL_ENV, NODE_ENV)

  if (isEnv(NEXT_PUBLIC_VERCEL_ENV)) {
    return NEXT_PUBLIC_VERCEL_ENV;
  }

  if (isEnv(NODE_ENV)) {
    return NODE_ENV;
  }

  return "development";
};

const configs: ConfigsMap = {
  development: {
    apiUrl: "http://localhost:3000/api",
    environment: "development",
    url: 'http://localhost:3000'
  },
  preview: {
    apiUrl: "http://localhost:3000/api",
    environment: "preview",
    url: 'http://localhost:3000'
  },
  production: {
    apiUrl: "https://www.youtopiaai.com/api",
    environment: "production",
    url: 'https://www.youtopiaai.com'
  },
};

export const config = configs[getEnv()]
