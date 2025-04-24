import React, { memo, useCallback } from 'react';

interface BACKDROP_TYPE {
  show: boolean;
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  position?: string;
  children: React.ReactNode;
}

const BackdropBg = ({ show, setBackdrop, position , children }: BACKDROP_TYPE) => {
  
  const toggleBackdrop = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if(target === e.currentTarget || target.closest('a')){
      setBackdrop(false) 
    }
  }, [setBackdrop]);
  
  return (
    <div onClick={toggleBackdrop} className={`fixed pt-2 flex z-50 justify-center ${position ?? "items-center"} inset-0 transition-all ${show ? 'visible bg-black/20' : 'invisible'} `}>
    { children } 
    </div>
    );
}

export default memo(BackdropBg);