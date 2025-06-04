import { useState, useCallback, ChangeEvent } from 'react';
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
      <form name="sign-up" className="flex flex-col gap-y-3 w-full">
           <span id="sign-up" className="text-xl font-medium dark:text-slate-200">Sign Up & Connect!</span>
           <Inputbox placeholder="your_unique_username02" icon={<AtSign className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="text" />
           <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" value={signupData?.email} onChange={handleSignupEmail}/>
           <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" toggleType={true} value={signupData?.password} onChange={handleSignupPass}/>
           <div className="w-full flex flex-col gap-x-2 justify-center items-center">
              <Button type="submit" className="bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-400/25 active:dark:bg-emerald-800/40 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24" text="Sign Up" />
           </div>
      </form>
    )
};

export default CreateAcc;