import { Mail } from 'lucide-react';
import Navbar from '../../layouts/Navbar';

const Confirmation = () => {
  return (
    <div className="w-full min-h-screen dark:bg-zinc-950 bg-zinc-50 justify-center items-center flex flex-col p-4">
       <div className="fixed top-0 w-full" >
          <Navbar />
       </div>
       <div className="dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800 flex justify-center flex-col w-full md:max-w-[23rem] p-4 gap-y-4 shadow-lg dark:shadow-none">
          <div className="flex items-center flex-col justify-center w-full gap-y-3">
             <span className="bg-emerald-100 dark:bg-emerald-900/20 rounded-full p-3 text-emerald-600 dark:text-emerald-400 self-center">
                <Mail size={30}/>
              </span>
              <span className="dark:text-zinc-200 font-bold text-2xl">Check Your Email</span>
           </div>
           <div className="w-full text-center">
             <p className="text-zinc-600 dark:text-zinc-500">We've sent you an email confirmation. Please check your inbox and click the verification link to continue.</p>
           </div>
           <div className="rounded-md border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-3">
             <p className="text-emerald-600 dark:text-emerald-400 text-sm">Didn't receive the email? Check your spam folder.</p>
           </div>
       </div>
    </div>
    );
};

export default Confirmation;