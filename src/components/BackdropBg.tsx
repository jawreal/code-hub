import React, { memo } from 'react';

interface BACKDROP_TYPE {
  show: boolean;
  setBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  position?: string;
  children: React.ReactNode;
}

const BackdropBg = ({ show, setBackdrop, position , children }: BACKDROP_TYPE) => {
  
  return (
    <div onClick={() => setBackdrop(false)} className={`fixed pt-2 flex z-50 justify-center ${position ?? "items-center"} inset-0 transition-all ${show ? 'visible bg-black/20 backdrop-blur-sm' : 'invisible'} `}>
    { children } 
    </div>
    );
}

export default memo(BackdropBg);