import { lazy, Suspense } from 'react';
import NavbarSkeleton from '../../components/NavbarSkeleton';
const Navbar = lazy(() => import('../../layouts/Navbar')); 
import Button from '../../components/Button';
import GoogleLogo from '../../assets/GoogleLogo';
import GitHubLogo from '../../assets/GitHubLogo';
import { handleGithub } from '../../services/handleGithub';
import { handleGoogle } from '../../services/handleGoogle';
import { Outlet } from 'react-router-dom';

const SignIn = () => {
  return(
    <>
    <div className="w-full min-h-screen bg-gradient-to-b from-emerald-50 via-rose-50 to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-emerald-950 flex md:flex-row flex-col justify-center items-center gap-y-3 relative">
        <div className="w-full absolute top-0 z-10">
          <Suspense fallback={<NavbarSkeleton />}>
             <Navbar />
          </Suspense>
        </div>
        <div className="flex flex-col w-full md:w-96 md:mr-auto md:ml-10 text-center md:text-left z-10 mb-8 md:mb-0">
          <span className="text-4xl md:text-5xl font-extrabold dark:text-zinc-200">Code Smarter</span>
          <span className="text-4xl md:text-5xl font-extrabold text-emerald-600">Not Harder</span>
          <span className="text-zinc-500 text-md px-2 md:px-0">Join discussions, participate in events, and connect with fellow developers to stay current with industry trends.
          </span>
        </div>
        <div className="flex flex-col md:ml-auto md:mr-10 gap-y-2 w-72 md:w-80 text-center z-10">
          <Outlet />
          <span className="text-zinc-500 my-3">or continue with</span>
          <div className="w-full flex flex-row justify-center gap-x-2">
            <Button className="dark:bg-zinc-900 bg-zinc-100 rounded-md py-3 flex-1 flex justify-center px-6 font-medium border border-zinc-300 dark:border-zinc-800 active:bg-zinc-300/30 active:dark:bg-zinc-950/30" onClick={handleGoogle} icon={<GoogleLogo />}/>
            <Button className="dark:bg-zinc-900 bg-zinc-100 rounded-md py-3 flex-1 flex justify-center px-6 font-medium border border-zinc-300 dark:border-zinc-800 active:bg-zinc-300/30 active:dark:bg-zinc-950/30" onClick={handleGithub} icon={<GitHubLogo />}/>
          </div>
      </div>
    </div>
    </>
    );
};

export default SignIn;