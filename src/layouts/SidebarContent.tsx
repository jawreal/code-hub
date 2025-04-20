import { useState, memo } from 'react';
import { useLocation } from "react-router-dom";
import { itemsType } from '../helpers/itemsType';
import { useActivePath } from '../helpers/pathChecker';
import { Link } from 'react-router-dom';
import { Ellipsis } from "lucide-react";
import LogoHeader from '../components/LogoHeader';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

interface ITEMS_TYPE {
  items: itemsType[];
  collapse?: boolean;
}

const SidebarContent = ({ items, collapse }: ITEMS_TYPE) => {
  const location = useLocation();
  const [showDropdown, setDropdown] = useState<boolean>(false);
  return (
    <aside className="w-full flex flex-col bg-inherit">
      {!collapse && <div className="w-full flex flex-row items-center space-x-1 pl-3 mb-1">
        <LogoHeader page={true}/>
      </div>} 
      <ul className={`flex bg-inherit ${collapse ? "flex-row md:flex-col items-center md:items-start w-full bg-inherit border-b md:border-none border-zinc-200 dark:border-zinc-800 relative px-2 md:px-0 py-2 md:static space-x-5 md:space-x-0" : "flex-col pt-1 md:pt-0 md:border-none"}`}>
        {items?.map((item: itemsType, index: number) => {
          const newPath = item.name.replaceAll(" ", "-");
          const currPath = useActivePath(location.pathname, newPath);
          return (<li key={item.name} className={`${(collapse && index < 2) ? "flex md:w-full" : (!collapse ? "flex w-full" : "hidden md:flex w-full")} flex-row items-center space-x-1`}>
             {currPath && <span className={`rounded-md bg-emerald-600 w-1 h-6 ${collapse ? "hidden md:inline" : ""}`} ></span>}
             <Link to={`/${newPath.toLowerCase()}`} className={`${(currPath && !collapse) ? "dark:bg-zinc-800 bg-zinc-100 font-medium px-2" : ((currPath && collapse) ? "dark:bg-zinc-900 bg-zinc-100 font-medium py-2 md:py-1 px-2" : "pl-4")} py-1 text-sm dark:text-zinc-200 w-full rounded-md whitespace-nowrap flex gap-x-2`}>
               {item.icon && <span className="text-zinc-400" >{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})} 
      {collapse && <li className="absolute right-5 md:static block md:hidden" key="ellipsis">
        <div className="relative">
          <Button 
            className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" 
            icon={<Ellipsis size={22} />} 
            onClick={() => setDropdown(prevDp => !prevDp)}
          />
          <Dropdown showDropdown={showDropdown} setDropdown={setDropdown} items={items} />
         </div>
       </li>} 
      </ul>
    </aside>
    );
};

export default memo(SidebarContent);