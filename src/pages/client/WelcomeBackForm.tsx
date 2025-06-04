import { useState, useCallback, ChangeEvent } from 'react';
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import { Mail, Lock } from 'lucide-react';
import { CREDENTIALS_TYPE } from '../../helpers/reusableTypes';


const WelcomeBack = () => {
  const [siginData, setSigninData] = useState<CREDENTIALS_TYPE>({
    email: "", 
    password: "", 
  });
  
  const handleSigninEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSigninData(prevData => ({
      ...prevData,
      email: e.target.value
    }));
  }, []);
  
  const handleSigninPass= useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSigninData(prevData => ({
      ...prevData,
      password: e.target.value
    }));
  }, []);
  
  return (
      <form name="sign-in" className="flex flex-col gap-y-3 w-full">
           <span className="text-xl font-medium dark:text-slate-200">Welcome Back</span>
           <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" value={siginData?.email} onChange={handleSigninEmail}/>
           <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" toggleType={true} value={siginData?.password} onChange={handleSigninPass} />
           <div className="w-full flex flex-col gap-x-2 justify-center items-center">
              <Button type="submit"  className="bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-400/25 active:dark:bg-emerald-800/40 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24 active:bg-emerald-600/50 active:dark:bg-emerald-400/50" text="Sign In" />
           </div>
      </form>
    );
};

export default WelcomeBack;