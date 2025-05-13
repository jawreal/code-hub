import { createClient } from '@supabase/supabase-js';
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const supabase = createClient(apiUrl, apiKey, {
  auth: {
    persistSession: true, 
    autoRefreshToken: true, 
    detectSessionInUrl: true, 
  }, 
});
