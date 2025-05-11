import { lazy, Suspense } from 'react';
import NavbarSkeleton from '../../components/NavbarSkeleton';
const Navbar = lazy(() => import('../../layouts/Navbar')); 
import WelcomeBack from './WelcomeBackForm';
import CreateAcc from './CreateAccForm';
import { RootState } from '../../features/store';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const { isSignUp } = useSelector((state: RootState) => state.switchForm);
  
  return(
    <>
    <div className="w-full min-h-screen bg-gradient-to-b from-emerald-50 via-rose-50 to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-emerald-950 flex md:flex-row flex-col justify-center items-center gap-y-3 relative">
        <div className="w-full absolute top-0 z-10">
          <Suspense fallback={<NavbarSkeleton />}>
             <Navbar />
          </Suspense>
        </div>
        <div className="flex flex-col w-full md:w-96 md:mr-auto md:ml-10 text-center md:text-left z-10">
          <span className="text-4xl md:text-5xl font-extrabold dark:text-zinc-200">Code Smarter</span>
          <span className="text-4xl md:text-5xl font-extrabold text-emerald-600">Not Harder</span>
          <span className="text-zinc-500 text-md px-2 md:px-0">Join discussions, participate in events, and connect with fellow developers to stay current with industry trends.
          </span>
        </div>
        {isSignUp && <CreateAcc />} 
        {!isSignUp && <WelcomeBack />} 
    </div>
    </>
    );
};

export default SignIn;