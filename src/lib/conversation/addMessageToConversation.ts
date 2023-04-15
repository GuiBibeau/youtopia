import type { Messages } from "./types";
import { sql } from "@/lib/postgres";

type Args = Pick<
  Messages,
  "is_bot" | "content" | "is_user" | "is_system" | "conversation_id"
> & {
  action_name: string;
};

export const addMessageToConversation = async (args: Args) => {
  return sql`
    WITH last_message AS (
      SELECT id, is_bot, is_system, is_user
      FROM messages
      WHERE conversation_id = ${args.conversation_id!}
      ORDER BY created_at DESC
      LIMIT 1
    )
    INSERT INTO messages (is_bot, is_system, is_user, conversation_id, content, youtopia_actions)
    SELECT
      new_message.is_bot,
      new_message.is_system,
      new_message.is_user,
      new_message.conversation_id,
      new_message.content,
      actions.id AS youtopia_actions
    FROM (
      SELECT
        ${args.conversation_id!}::uuid AS conversation_id,
        ${args.content!}::text AS content,
        ${args.is_bot!} AS is_bot, -- Set the appropriate values for the message type
        ${args.is_system!} AS is_system,
        ${args.is_user!} AS is_user
    ) AS new_message
    JOIN actions ON actions.name = ${args.action_name}
    WHERE NOT EXISTS (
      SELECT 1
      FROM last_message
      WHERE
        last_message.is_bot = new_message.is_bot AND
        last_message.is_system = new_message.is_system AND
        last_message.is_user = new_message.is_user
);`;
};
