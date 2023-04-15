import { z } from "zod";
import { getMagicLinkCompletion } from "./magic-link";

export const CompletionEnum = z.enum(["maginLink"]);
export type CompletionEnum = z.infer<typeof CompletionEnum>;

export const CONVERSATION_ID_COOKIE_NAME = 'youtopiaConversasionId'
