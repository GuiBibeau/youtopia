export const ANALYTICS_EVENTS = {
    magicLinkPrompt: "Magic Link Prompt",
    fetchVideos: "Fetch Videos"
} as const

export type AnalyticsEvent = keyof typeof ANALYTICS_EVENTS