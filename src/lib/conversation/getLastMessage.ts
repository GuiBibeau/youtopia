import { sql } from "@/lib/postgres";

export const getLastMessage = async (conversationId: string) => {
  return sql`
        SELECT *
        FROM messages
        WHERE conversation_id = ${conversationId}
        ORDER BY created_at DESC
        LIMIT 1;
`;
};
