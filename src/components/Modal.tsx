import { ReactNode, Dispatch, SetStateAction, useCallback } from 'react'; 
import Button from './Button';
import { X } from 'lucide-react';

interface MODAL_TYPE  {
  openModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  showCloseBtn?: boolean;
}

const Modal = ({ openModal, setModal, children, showCloseBtn }: MODAL_TYPE ) => {
  
  const propagate = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);
  
  const closeModal = useCallback(() => {
    setModal(false);
  }, []);
  
  return(
     <div onClick={propagate} className={`dark:bg-zinc-900 bg-zinc-50 w-full md:max-w-[31rem] mx-3 rounded-md border border-zinc-200 dark:border-zinc-800 p-3 flex flex-col justify-center items-center text-center transform transition-all duration-300 ease-in-out ${openModal ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 invisible'} relative`}>
       {showCloseBtn && <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 absolute right-0" icon={<X size={22} />} onClick={closeModal}/>} 
       { children } 
      </div>
    );
}

export default Modal;