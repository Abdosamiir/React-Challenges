import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ihtetjxwdwmxzuodchwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodGV0anh3ZHdteHp1b2RjaHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTYxODIsImV4cCI6MjA2MDk5MjE4Mn0.LsgJtfC305uDvQtjOT-aEfuby4nY0BdzHiosKaDgX0A";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
