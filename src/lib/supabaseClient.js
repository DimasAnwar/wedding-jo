import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.SUAPABASE_PROJECT_URL ||
  import.meta.env.SUPABASE_PROJECT_URL ||
  'https://fevgsusxmruqeghnqbst.supabase.co';

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_PUBLISHABLE_KEY ||
  'sb_publishable_akePYzjrdSFY0d5UolV_tA_6JX-r4Ae';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
