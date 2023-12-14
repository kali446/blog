import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_APP_SUPABASE_ANON_KEY!;

const supabase = createClient(
  "https://uirhhjnybhibcwmzvshp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpcmhoam55YmhpYmN3bXp2c2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MDg4NDUsImV4cCI6MjAxNjI4NDg0NX0.NlVni1Bv3k2cEgh4kU3_RMsQfTLpZD8YBMFSINZ8_7Q",
);

export default supabase;
