"use client";
import { ANALYTICS_EVENTS, AnalyticsEvent } from "@/lib/analytics/events";
import splitbee from "@splitbee/web";
import { useEffect, useState } from "react";

type Props = {
  event: AnalyticsEvent;
};

export const EventTrack: React.FC<Props> = ({ event }) => {
  useEffect(() => {
    splitbee.track(ANALYTICS_EVENTS[event]);
  }, [event]);

  return null;
};
