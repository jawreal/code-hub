import { useContext, createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import { getSession } from '../services/getSession';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

interface Info {
  authenticated?: boolean;
  username?: string;
  image?: string | undefined;
} 

type Context = {
  refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
  info: Info;
}


const AuthContext = createContext<Context | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<Info>({
    authenticated: false, 
    username: "", 
    image: undefined 
  });
  const { data, isLoading, refetch } = useQuery({
    queryFn: () => getSession(), 
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
        if(data?.authenticated === true && currentEntryPage) {
          return navigate('/home', { replace: true}) 
        }
        const { authenticated, ...userInfo } = data as Info;
        setInfo(userInfo); 
      }
    };
    
    checkAuth();
  }, [data, isLoading, navigate]);
 
  //instead of info ?? null, it should be info: info ?? null
  return (
    <AuthContext.Provider value={{ refetch, info }}>
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
