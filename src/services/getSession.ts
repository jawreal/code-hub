type Session = {
  authenticated?: boolean;
}

export const getSession = async (): Promise<Session | undefined> => {
  try {
    const result = await fetch('http://localhost:3000/auth/verify-user', {
      credentials: "include"
    });
    const session = await result.json();
    if (session) return session;
  } catch (err) {
    console.error('Error fetching session:', err);
    return { authenticated: false };
  }
};
