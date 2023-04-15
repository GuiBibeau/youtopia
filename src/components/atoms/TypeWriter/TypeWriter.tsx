"use client";
import clsx from "clsx";
import styles from "./TypwWriter.module.css";
import Typewriter from "react-ts-typewriter";
import type { PropsWithChildren } from "react";
import { BotAvatar } from "../BotAvatar/BotAvatar";

type Props = {
  className?: string;
  speed?: number;
  text: string;
};

export const TypeWriter: React.FC<PropsWithChildren<Props>> = ({
  speed = 10,
  text,
}) => {
  return (
    <div className="flex items-center min-h-[32px]">
      <div className="mr-4 text-lg leading-8 text-gray-300 ">
        <BotAvatar />
      </div>
      <p className="text-lg leading-8 text-gray-300">
        {text}
        {/* <Typewriter cursor={false} text={text} speed={speed} /> */}
      </p>
    </div>
  );
};
