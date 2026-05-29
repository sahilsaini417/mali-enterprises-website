// @ts-ignore: Suppress missing module/type declarations for Supabase client
import { createClient } from '@supabase/supabase-js';

// Provide a minimal declaration for `process` so TypeScript won't error
declare const process: {
  env: {
    SUPABASE_URL?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    [key: string]: string | undefined;
  };
};

export const createServerSupabase = () => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Supabase server credentials are not configured.');
  }
  return createClient(url, key, {
    auth: {
      persistSession: false
    }
  });
};
