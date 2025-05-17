import { LogOut } from 'lucide-react';
import { useState, useCallback, MouseEvent, Dispatch, SetStateAction, memo } from 'react';
import { supabase } from '../services/supabaseClient';
import Button from './Button';
import Spinner from '../assets/Spinner';
import { TOGGLE_STATE } from '../helpers/reusableTypes';
interface PROP_TYPE {
  offModal: Dispatch<SetStateAction<TOGGLE_STATE>>;
}

const ConfirmSignout = ({ offModal }: PROP_TYPE) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSignout = useCallback(async(): Promise<void> => {
    setIsLoading(true)
    try {
      await supabase.auth.signOut()
    }catch(err){
      console.log("Error occured in Signout", err);
    }
  }, []);
  
  const handlePropagate = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);
  
  const cancelSignout = useCallback(() => {
    offModal(prevState => ({
     ...prevState,
     modal: false, 
    }));
  }, []);
  
  return (
  <div onClick={handlePropagate} className="w-full flex flex-col dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-md p-3 gap-y-4">
    <div className="w-full flex items-center gap-x-2">
      <span className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-600 dark:text-red-800" ><LogOut size={22} /></span>
      <span className="font-medium text-lg dark:text-zinc-200">Sign out confirmation</span>
    </div>
    <span className="text-zinc-500 text-left text-sm">You're about to sign out from your account. Any unsaved changes will be lost. Do you want to continue?</span>
    <div className="w-full flex justify-end gap-x-3">
      <Button className="p-y px-3 rounded-md border border-zinc-300 dark:border-zinc-800 font-medium dark:text-zinc-200 text-sm active:bg-zinc-200/30 active:dark:bg-zinc-800/40" text="Stay signed in" onClick={cancelSignout} />
      <Button className="py-2 px-3 rounded-md font-medium text-red-50 text-sm bg-red-600 dark:dark:bg-red-800 active:bg-red-700 active:dark:bg-red-800/40 flex gap-x-2 items-center" onClick={handleSignout}>
        {isLoading ? <Spinner size="w-4 h-4" color="border-2 border-red-300 dark:text-red-700" /> :
         <>
         <span className="text-red-50"><LogOut size={18} /></span>
         <span>Sign out</span>
         </>
        }
      </Button>
    </div>
  </div>
 );
};

export default memo(ConfirmSignout);