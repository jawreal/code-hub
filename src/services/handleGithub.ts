import { supabase } from './supabaseClient';

export const handleGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/home`, 
        queryParams: {
          prompt: "login", 
      },
      }
    });

    if (error) {
      console.error("GitHub login error:", error.message);
   }
};
