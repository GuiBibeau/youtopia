"use client";
import Typewriter from "react-ts-typewriter";

type Props = {
    text: string
}

export const ChannelInfo: React.FC<Props> = ({text}) => {
  return (
    <p className="text-lg leading-8 text-gray-300">
      <Typewriter
        cursor={false}
        text={text}
        speed={5}
      />
    </p>
  );
};
