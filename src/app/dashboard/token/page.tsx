"use client";

import { BotAvatar } from "@/components/atoms/BotAvatar/BotAvatar";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Typewriter from "react-ts-typewriter";

export default async function Page({}) {
  redirect('/dashboard')
  return (
    <div className="flex items-center min-h-[32px]">
      <div className="mr-4 text-lg leading-8 text-gray-300 ">
        <BotAvatar />
      </div>
      <p className="text-lg leading-8 text-gray-300">
        <Typewriter
          cursor={false}
          text="Feel free to close this page if it does not close by itself"
          speed={5}
        />
      </p>
    </div>
  );
}
