import { createClient } from "@supabase/supabase-js";

export default function supabaseAdmin() {


	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
	const supabaseAdmin = process.env.NEXT_PUBLIC_SUPABAE_ADMIN;

	return createClient(
		supabaseUrl!,
		supabaseAdmin!,
		{
			auth: {
				autoRefreshToken: false,
				persistSession: false,
			},
		}
	);
}
