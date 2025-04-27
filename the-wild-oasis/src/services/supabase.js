import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lljkebunbfkfbsaekbwz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsamtlYnVuYmZrZmJzYWVrYnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTI3NjUsImV4cCI6MjA2MTM2ODc2NX0.tSCf2QtyJhCPYluoQtnBoOT-qpbTpmlQOhuGlp7-P2I";
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabaseUrl };
export default supabase;
