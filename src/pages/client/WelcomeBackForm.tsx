import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import { Mail, Lock } from 'lucide-react';
//import { CREDENTIALS_TYPE } from '../../helpers/reusableTypes';


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
  
  const onSignin = useCallback(async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:3000/auth/sign-in', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(siginData)
      });
      const response = await result.json();
      if(response.status === 200){
        console.log(response?.message)
      }else if(response.status === 401){
        console.log(response?.message)
      }
    }catch(err){
      console.error(err)
    }
  }, [siginData])
  
  return (
      <form name="sign-in" onSubmit={onSignin} className="flex flex-col w-full">
           <span className="text-xl font-medium dark:text-slate-200">Welcome Back</span>
           <div className="dark:text-zinc-200 flex gap-x-2 justify-center mb-3">
             <span className="text-zinc-500" >Don't have an account?</span>
             <Link className="text-emerald-600 font-medium" to={`${window.location.origin}/sign-in/create`}>Sign up</Link>
           </div>
           <div className="flex flex-col w-full gap-y-3">
               <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" value={siginData?.email} onChange={handleSigninEmail}/>
               <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" toggleType={true} value={siginData?.password} onChange={handleSigninPass} />
               <div className="w-full flex flex-col gap-x-2 justify-center items-center">
                  <Button type="submit"  className="bg-emerald-600 active:bg-emerald-700 dark:bg-emerald-400/25 active:dark:bg-emerald-800/40 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24 active:bg-emerald-600/50 active:dark:bg-emerald-400/50" text="Sign In" />
               </div>
            </div>
      </form>
    );
};

export default WelcomeBack;