import { useState, useCallback, ChangeEvent } from 'react';
import { Link } from 'react-router-dom'; 
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import { Mail, Lock, AtSign } from 'lucide-react';
import { CREDENTIALS_TYPE } from '../../helpers/reusableTypes';

const CreateAcc = () => {
  const [signupData, setSignupData] = useState<CREDENTIALS_TYPE>({
    email: "", 
    password: "", 
  });
  
  const handleSignupEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSignupData(prevData => ({
      ...prevData,
      email: e.target.value
    }));
  }, []);
  
  const handleSignupPass= useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSignupData(prevData => ({
      ...prevData,
      password: e.target.value
    }));
  }, []);
  
  return (
      <form name="sign-up" className="flex flex-col w-full">
           <span id="sign-up" className="text-xl font-medium dark:text-slate-200">Connect with us!</span>
           <div className="dark:text-zinc-200 flex gap-x-2 justify-center mb-3">
             <span className="text-zinc-500" >Already have an account?</span>
             <Link className="text-emerald-600 font-medium" to={`${window.location.origin}/sign-in`}>Sign in</Link>
           </div>
           <div className="w-full flex flex-col gap-y-3">
               <Inputbox placeholder="your_username02" icon={<AtSign className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="text" />
               <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" value={signupData?.email} onChange={handleSignupEmail}/>
               <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" toggleType={true} value={signupData?.password} onChange={handleSignupPass}/>
               <div className="w-full flex flex-col gap-x-2 justify-center items-center">
                  <Button type="submit" className="bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-400/25 active:dark:bg-emerald-800/40 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24" text="Sign Up" />
               </div>
           </div>
      </form>
    )
};

export default CreateAcc;