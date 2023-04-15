import { z } from 'zod';

export interface Actions {
  id: string   /* primary key */;
  created_at?: string;
  name: string;
};

export interface Conversations {
  id: string   /* primary key */;
  created_at?: string;
  user_id?: string;
};

export interface Messages {
  id: string   /* primary key */;
  created_at?: string;
  is_bot?: boolean;
  is_system?: boolean;
  is_user?: boolean;
  conversation_id?: string   /* foreign key to conversations.id */;
  content: string;
  youtopia_actions?: string   /* foreign key to actions.id */;
  conversations?: Conversations;
  actions?: Actions;
};


export const ActionsSchema = z.object({
  id: z.string(), /* primary key */
  created_at: z.date(),
  name: z.string(),
});

export const ConversationsSchema = z.object({
  id: z.string(), /* primary key */
  created_at: z.date(),
  user_id: z.string(),
});

export const MessagesSchema = z.object({
  id: z.string(), /* primary key */
  created_at: z.date(),
  is_bot: z.boolean(),
  is_system: z.boolean(),
  is_user: z.boolean(),
  conversation_id: z.string(), /* foreign key to conversations.id */
  content: z.string(),
  youtopia_actions: z.string().optional(), /* foreign key to actions.id */
});