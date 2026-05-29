// If the package types are not installed, suppress the module-not-found
// error for the import so the runtime require can still work.
// @ts-ignore
import { createClient } from '@supabase/supabase-js';

// Provide minimal typing for process.env to avoid needing @types/node here.
declare const process: {
  env: {
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    [key: string]: string | undefined;
  };
};

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);
