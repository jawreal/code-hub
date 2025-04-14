import React, { memo } from 'react';

interface SIDEBAR_TYPE {
  showSidebar: boolean;
  children: React.ReactNode;
}

  
const Sidebar = ({ showSidebar, children }: SIDEBAR_TYPE) => {
  
  return (
    <>
     <div className={`top-0 left-0 bg-white dark:bg-zinc-900 z-50 flex flex-col w-64 h-full shadow-md fixed transition-all duration-300 ease ${ showSidebar? 'translate-x-0' : 'translate-x-[-100vw]'} p-2`}>
      { children } 
      </div>
    </>
    );
};

export default memo(Sidebar);