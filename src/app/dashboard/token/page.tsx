// "use client";

import { BotAvatar } from "@/components/atoms/BotAvatar/BotAvatar";
import { GOOGLE_COOKIE_NAME } from "@/lib/google/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Typewriter from "react-ts-typewriter";

export default async function Page({}) {
  redirect('/dashboard')

}
