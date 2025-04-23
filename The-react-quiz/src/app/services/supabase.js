import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ihtetjxwdwmxzuodchwu.supabase.co";
// eslint-disable-next-line no-undef
const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
