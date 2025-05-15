import { supabase } from './supabaseClient';

export const handleGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`, 
    },
  });
  console.log("Logged");

  if (error) {
    console.log("Error occurred:", error.message);
  } else {
    console.log("Login success", data);
  }
};

