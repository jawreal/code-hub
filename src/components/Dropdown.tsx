import React, { memo, useRef, useEffect, useMemo } from 'react';
import { useActivePath } from '../helpers/pathChecker';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ITEMS_TYPE, TOGGLE_STATE } from '../helpers/reusableTypes';

interface DP_TYPE {
  items: ITEMS_TYPE[];
  setDropdown: React.Dispatch<React.SetStateAction<TOGGLE_STATE>>;
  isSlice: boolean;
}


const Dropdown = ({ setDropdown, items, isSlice }: DP_TYPE) => {
  const location = useLocation();
  const outsideRef = useRef<HTMLUListElement | null>(null);
  const memoizedItems = useMemo(() => {
    return isSlice ? items.slice(2) : items;
  }, [isSlice])
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target as Node)){
        setDropdown((prevState: TOGGLE_STATE) => ({...prevState, dropdown: false }));
      };
    }; 
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  //if(!showDropdown) return null;
  return (
     <ul ref={outsideRef} className="absolute min-w-[11rem] flex flex-col items-center z-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 mt-2 right-0 shadow shadow-sm overflow-hidden">
         {memoizedItems?.map((item: ITEMS_TYPE) => {
          const newPath = item.name.replaceAll(" ", "-");
          const currPath = useActivePath(location.pathname, newPath);
          return (<li key={item.name} className="flex flex-row items-center w-full">
             <Link to={`/${newPath.toLowerCase()}`} className={`${currPath ? "font-medium bg-zinc-200/30 dark:bg-zinc-800" : "bg-100/30"} dark:text-zinc-200 text-sm py-3 px-3 w-full whitespace-nowrap flex gap-x-3`}>
               {item.icon && <span className="text-zinc-400" >{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})}  
         </ul>
    );
};

export default memo(Dropdown);