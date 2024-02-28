import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://omunzrlyyrrsdmnfpixy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tdW56cmx5eXJyc2RtbmZwaXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTYyOTcsImV4cCI6MjAyMTQzMjI5N30.tJxjThcNYTEDD4fNrFY_BPaf3DoV1e4gd4QOhEXs458";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
