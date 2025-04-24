import { useLocation } from 'react-router-dom';
import { useActivePath } from '../helpers/pathChecker';

const NavbarSkeleton = () => {
  const location = useLocation();
  const SignInPage = useActivePath(location.pathname, 'sign-in');
  
  return (
    <nav className="bg-zinc-50 dark:bg-zinc-950 py-2 flex flex-row px-2 md:px-0 justify-center items-center border-b dark:border-zinc-800 border-zinc-200 sticky top-0 z-50">
      <div className="flex items-center mr-auto md:ml-5 ml-3 space-x-2">
        {!SignInPage && (
          <div className="w-8 h-8 rounded-md animate-pulse bg-zinc-200 dark:bg-zinc-800"></div>
        )}
        <div className="h-8 w-32 rounded-md animate-pulse bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
     
      {!SignInPage && (
        <div className="w-full flex justify-end items-center">
          <div className="w-8 h-8 rounded-md animate-pulse bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="w-8 h-8 ml-2 rounded-md animate-pulse bg-zinc-200 dark:bg-zinc-800"></div>
        </div>
      )}
      
      <div className={`flex flex-row ml-auto items-center ${SignInPage ? "md:mr-10" : "mr-3"}`}>
        {SignInPage && (
          <div className="w-24 h-10 rounded-md animate-pulse bg-emerald-200 dark:bg-emerald-900/30"></div>
        )}
        <div className={`${!SignInPage ? "mx-2" : "ml-2"} w-8 h-8 rounded-md animate-pulse bg-zinc-200 dark:bg-zinc-800`}></div>
        {!SignInPage && (
          <div className="w-7 h-7 rounded-full animate-pulse bg-zinc-200 dark:bg-zinc-700"></div>
        )}
      </div>
    </nav>
  );
};

export default NavbarSkeleton;