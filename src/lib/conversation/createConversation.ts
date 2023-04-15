import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const createConversation = async (id: string) => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  await supabase.from("conversations").upsert({
    id,
  });
};
