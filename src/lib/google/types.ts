import { z } from 'zod';

export const thumbnailSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export const thumbnailsSchema = z.object({
  default: thumbnailSchema,
  medium: thumbnailSchema,
  high: thumbnailSchema,
});

export const youtubeChannelSchema = z.object({
  kind: z.literal('youtube#channel'),
  etag: z.string(),
  id: z.string(),
  snippet: z.object({
    title: z.string(),
    description: z.string(),
    customUrl: z.string(),
    publishedAt: z.string().refine((value) => !isNaN(Date.parse(value)), {
      message: 'Invalid date format',
    }),
    thumbnails: thumbnailsSchema,
    localized: z.object({
      title: z.string(),
      description: z.string(),
    }),
    country: z.string(),
  }),
});

export const youtubeChannelListResponseSchema = z.object({
  kind: z.literal('youtube#channelListResponse'),
  etag: z.string(),
  pageInfo: z.object({
    totalResults: z.number(),
    resultsPerPage: z.number(),
  }),
  items: z.array(youtubeChannelSchema),
});
