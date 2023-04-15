"use client";
import splitbee from "@splitbee/web";

import { useEffect } from "react";

export default function SplitbeeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    splitbee.init({
      token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN
    });
  }, []);

  return (
    <>
      <>{children}</>
    </>
  );
}
