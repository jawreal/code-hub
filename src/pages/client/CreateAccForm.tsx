import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import GoogleLogo from '../../assets/GoogleLogo';
import GitHubLogo from '../../assets/GitHubLogo';
import { Mail, Lock, AtSign } from 'lucide-react';

const CreateAcc = () => {
  return (
      <form className="flex flex-col md:ml-auto md:mr-10 gap-y-3 w-72 md:w-80 text-center z-10">
           <span id="sign-up" className="text-xl font-medium dark:text-slate-200">Sign Up & Connect!</span>
           <Inputbox placeholder="your_unique_username02" icon={<AtSign className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="text" />
           <Inputbox placeholder="johndoe@example.com" icon={<Mail className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="email" />
           <Inputbox placeholder="••••••••••••••" icon={<Lock className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />} type="password" />
           <div className="w-full flex flex-col gap-x-2 justify-center items-center">
              <Button type="submit" className="bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24" text="Sign Up" />
              <span className="text-zinc-500 my-4">or continue with</span>
              <div className="w-full flex flex-row justify-center gap-x-2">
                 <Button className="dark:bg-zinc-900 bg-gray-100 rounded-md py-3 w-py-3 flex-1 flex justify-center px-6 font-medium border border-gray-300 dark:border-zinc-600" icon={<GoogleLogo />}/>
                 <Button className="dark:bg-zinc-900 bg-gray-100 rounded-md py-3 flex-1 flex justify-center px-6 font-medium border border-gray-300 dark:border-zinc-600" icon={<GitHubLogo />}/>
              </div>
           </div>
      </form>
    )
};

export default CreateAcc;