import { createBrowserClient } from "@supabase/ssr";

export function createSupabaseBrowser() {

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	return createBrowserClient(
		supabaseUrl!,
		supabaseAnonKey!
	);
}
