import Image from "next/image";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { GlassmorphicEffect } from "@/components/atoms/GlassmorphicEffect";
import { LoginButton } from "@/components/atoms/LoginButton";

const benefits = [
  "AI-driven video curation",
  "Metadata automation",
  "Automatic script generation",
  "Engaging thumbnail creation",
  "Intelligent upload planning",
  "Smart audience interaction",
];

export default function Page() {
  return (
    <div className="py-24 sm:py-32 h-full">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="/images/shutterstock_2240626953.jpg"
              alt=""
              height={384}
              width={672}
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Effortless Channel Automation
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Revolutionize content creation with AI-powered automation for
                seamless YouTube channel management and growth.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <LoginButton />
            </div>
          </div>
        </div>
        <GlassmorphicEffect />
      </div>
    </div>
  );
}
