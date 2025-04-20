import React, { memo, useRef, useEffect } from 'react';
import { useActivePath } from '../helpers/pathChecker';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { itemsType } from '../helpers/itemsType';
interface DP_TYPE {
  showDropdown: boolean;
  items: itemsType[];
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ showDropdown, setDropdown, items }: DP_TYPE) => {
  const location = useLocation();
  const outsideRef = useRef<HTMLUListElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target as Node)){
        setDropdown(false)
      };
    }; 
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  if(!showDropdown) return null;
  return (
     <ul ref={outsideRef} className="absolute flex flex-col items-center divide-y divide-zinc-200 dark:divide-zinc-800 z-10 rounded-md bg-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mt-2 right-0">
         {items?.slice(2).map((item: itemsType) => {
          const newPath = item.name.replaceAll(" ", "-");
          const currPath = useActivePath(location.pathname, newPath);
          return (<li key={item.name} className="flex flex-row items-center w-full">
             <Link to={`${newPath.toLowerCase()}`} className={`${currPath ? "dark:bg-zinc-900 bg-zinc-200 font-medium" : ""} text-sm dark:text-zinc-200 py-3 px-4 w-full whitespace-nowrap flex gap-x-2`}>
               {item.icon && <span className="text-zinc-400" >{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})}  
         </ul>
    );
};

export default memo(Dropdown);