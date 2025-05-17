import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import GoogleLogo from '../../assets/GoogleLogo';
import GitHubLogo from '../../assets/GitHubLogo';
import { handleGithub } from '../../services/handleGithub';
import { handleGoogle } from '../../services/handleGoogle';
import { Mail, Lock } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

interface CREDENTIALS_TYPE {
  email: string;
  password: string;
}

const WelcomeBack = () => {
  const [credentials, setCredentials] = useState<CREDENTIALS_TYPE>({
    email: "", 
    password: "", 
  });
  
  const handleEmail = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials(prevData => ({
      ...prevData,
      email: e.target.value
    }));
  }, []);
  
  const handlePass= useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCredentials(prevData => ({
      ...prevData,
      password: e.target.value
    }));
  }, []);
  
  const handleSignIn = useCallback(async(e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log(credentials)
    try{
      await supabase.auth.signInWithPassword(credentials);
    }catch(err){
      console.log("Error occured", err)
    }
  }, [credentials]);
  
  return (
      <form name="sign-in" className="flex flex-col md:ml-auto md:mr-10 gap-y-3 w-72 md:w-80 text-center z-10" onSubmit={handleSignIn}>
           <span className="text-xl font-medium dark:text-slate-200">Welcome Back</span>
           <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" value={credentials?.email} onChange={handleEmail}/>
           <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" toggleType={true} value={credentials?.password} onChange={handlePass} />
           <div className="w-full flex flex-col gap-x-2 justify-center items-center">
              <Button type="submit"  className="bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24 active:bg-emerald-600/50 active:dark:bg-emerald-400/50" text="Sign In" />
              <span className="text-zinc-500 my-4">or continue with</span>
              <div className="w-full flex flex-row justify-center gap-x-2">
                 <Button className="dark:bg-zinc-900 bg-zinc-100 rounded-md py-3 w-py-3 flex-1 flex justify-center px-6 font-medium border border-zinc-300 dark:border-zinc-800 active:bg-zinc-300/30 active:dark:bg-zinc-950/30" onClick={handleGoogle} icon={<GoogleLogo />}/>
                 <Button className="dark:bg-zinc-900 bg-zinc-100 rounded-md py-3 flex-1 flex justify-center px-6 font-medium border border-zinc-300 dark:border-zinc-800 active:bg-zinc-300/30 active:dark:bg-zinc-950/30" onClick={handleGithub} icon={<GitHubLogo />}/>
              </div>
           </div>
      </form>
    );
};

export default WelcomeBack;