import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const conversationExists = async (id: string) => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const { count } = await supabase
    .from("conversations")
    .select("id", { count: "exact", head: true })
    .eq('id', id)

  return count !== 0;
};
