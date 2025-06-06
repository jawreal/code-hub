import { useContext, createContext, ReactNode, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { getSession } from '../services/getSession';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

type Context = {
  refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
}

const AuthContext = createContext<Context | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, refetch } = useQuery({
    queryFn: getSession, 
    queryKey: ["session"], 
  });
  const navigate = useNavigate();
  const location = useLocation();
  const entry: string[] = useMemo(() => ["sign-in", "sign-up"], []);
  const currentEntryPage = useMemo(() => entry.some(page => location.pathname.includes(page)), [location, data])

  useEffect(() => {
    const checkAuth = () => {
      if(!isLoading){
        if(data?.authenticated === false && !currentEntryPage) return navigate('/sign-in', { replace: true}) 
        if(data?.authenticated === true && currentEntryPage) return navigate('/home', { replace: true})
      }
    };
    
    checkAuth();
  }, [data, isLoading, navigate]);

  return (
    <AuthContext.Provider value={{ refetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
