import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yyizohrgfdvfaiygegns.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aXpvaHJnZmR2ZmFpeWdlZ25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3Mzk1NTUsImV4cCI6MjAzOTMxNTU1NX0.JRUb8fmj-_hRpvbbOj-SNY27Lzs6aPXSXFydS-OCZNE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
