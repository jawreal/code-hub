import React, { memo, useCallback } from 'react';
import { TOGGLE_STATE } from '../helpers/reusableTypes';

interface BACKDROP_TYPE {
  show: boolean;
  setBackdrop: React.Dispatch<React.SetStateAction<TOGGLE_STATE>>;
  position?: string; 
  children: React.ReactNode;
  objKey: string;
}

const BackdropBg = ({ show, setBackdrop, position, objKey, children }: BACKDROP_TYPE) => {
  const toggleBackdrop = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if(target === e.currentTarget || target.closest('a')){
      setBackdrop((prevState: TOGGLE_STATE) => ({ ...prevState, [objKey]: false }));
    }
  }, [objKey, setBackdrop]);
  
  return (
    <div onClick={toggleBackdrop} className={`fixed pt-2 flex z-50 justify-center ${position ?? "items-center"} inset-0 transition-all ${show ? 'visible bg-black/20' : 'invisible'} `}>
    { children } 
    </div>
  );
}

export default memo(BackdropBg);