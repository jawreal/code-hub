import { supabase } from './supabaseClient';
import { Session } from '@supabase/supabase-js';

export const getSession = async (): Promise<Session | null | undefined> => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  } catch (err) {
    console.error('Error fetching session:', err);
    return undefined;
  }
};