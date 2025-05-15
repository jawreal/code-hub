import { useEffect, } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getSession } from '../services/getSession';
import PageFallback from './PageFallback'

const AuthCallback = () => {
  const navigate = useNavigate();
  const { data: session, isLoading } = useQuery({
    queryKey: ["authSession"], 
    queryFn: getSession, 
  });
  
  useEffect(() => {
    if(!isLoading){
      if(!session) {
        navigate('/sign-in')
      }else{
        navigate('/home')
      }
      window.history.replaceState(null, '', window.location.pathname);
    };
  }, [session, isLoading]);
  
  return (
    <div className="min-h-screen justify-center items-center">
      {isLoading && <PageFallback />}
    </div>
    );
};

export default AuthCallback;
