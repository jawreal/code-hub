import React, { memo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { itemsType } from '../helpers/itemsType';
interface DP_TYPE {
  showDropdown: boolean;
  items: itemsType[];
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ showDropdown, setDropdown, items }: DP_TYPE) => {
  const outsideRef = useRef<HTMLUListElement | null>(null)
  
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target as Node)){
        setDropdown(false)
      };
    };
  
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
     showDropdown && (
       <ul ref={outsideRef} className="absolute flex flex-col items-center divide-y divide-zinc-200 dark:divide-zinc-800 p-2 z-10 rounded-md bg-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mt-2 right-0">
            {items.slice(2).map((dpItem: itemsType) => (
                <li key={dpItem.name} className="w-full p-2 dark:text-zinc-200">
                  <Link className="w-full flex items-center gap-x-2" to={`${dpItem.name.toLowerCase()}`}>
                 {dpItem.icon && <span className="dark:text-zinc-200 text-zinc-400">{dpItem.icon}</span>}
                  <span className="dark:text-zinc-200 whitespace-nowrap text-sm">{dpItem.name}</span>
                  </Link>
                </li>
              ))} 
         </ul>
       )
    );
};

export default memo(Dropdown);