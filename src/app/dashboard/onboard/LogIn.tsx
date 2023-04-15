"use client";
import { BotAvatar } from "@/components/atoms/BotAvatar/BotAvatar";
import { EventTrack } from "@/components/atoms/EventTrack";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import {
  type ChangeEventHandler,
  type FormEventHandler,
  useState,
} from "react";
import Typewriter from "react-ts-typewriter";

type Props = {
  text: string;
  link: string;
};

export const Login: React.FC<Props> = ({ text, link }) => {
  const [showButton, setShowButton] = useState(false);
  const [email, setEmail] = useState("");

  const handleShowButton = () => {
    setTimeout(() => {
      setShowButton(true);
    }, 500);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center min-h-[32px]">
        <div className="mr-4 text-lg leading-8 text-gray-300 ">
          <BotAvatar />
        </div>
        <p className="text-lg leading-8 text-gray-300">
          <Typewriter
            cursor={false}
            text={text}
            speed={5}
            onFinished={handleShowButton}
          />
        </p>
      </div>
      <EventTrack event="magicLinkPrompt" />
      {showButton && (
        <Transition.Root
          className="flex justify-center w-full mt-10"
          show={showButton}
        >
          <FadeIn delay="delay-[500ms]">
            <Link
              href={link}
              className="flex-none rounded-md bg-crimson-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-crimson-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-red-500"
            >
              Connect YouTube
            </Link>
          </FadeIn>
        </Transition.Root>
      )}
    </div>
  );
};
