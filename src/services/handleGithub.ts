import { supabase } from './supabaseClient';

export const handleGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`, 
        queryParams: {
          prompt: "login", 
      },
      }
    });

    if (error) {
      console.error("GitHub login error:", error.message);
   }
};
