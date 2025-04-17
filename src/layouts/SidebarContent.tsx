import { useState, memo } from 'react';
import { itemsType } from '../helpers/itemsType';
import { ActivePath } from '../helpers/pathChecker';
import { Link } from 'react-router-dom';
import { Ellipsis } from "lucide-react";
import LogoHeader from '../components/LogoHeader';
import Button from '../components/Button';

interface ITEMS_TYPE {
  items: itemsType[];
  collapse?: boolean;
}

const SidebarContent = ({ items, collapse }: ITEMS_TYPE) => {
  const [showDropdown, setDropdown] = useState<boolean>(false);
  return (
    <aside className="w-full flex flex-col bg-inherit">
      {!collapse && <div className="w-full flex flex-row items-center space-x-1 pl-3 mb-1">
        <LogoHeader page={true}/>
      </div>} 
      <ul className={`flex bg-inherit ${collapse ? "flex-row md:flex-col items-center md:items-start w-full bg-inherit border-b md:border-none border-zinc-200 dark:border-zinc-800 relative py-2 pl-3 md:static space-x-5 md:space-x-0" : "flex-col pt-1 md:pt-0 md:border-none"}`}>
        {items?.map((item: itemsType, index: number) => {
          const newPath = item.name.replaceAll(" ", "-");
          const currPath = ActivePath(newPath);
          return (<li key={item.name} className={`flex flex-row items-center space-x-1 ${(collapse && index < 2) ? "block md:w-full" : (!collapse ? "block w-full" : "hidden md:block w-full")}`}>
             {currPath && <span className={`rounded-md bg-emerald-600 w-1 h-6 ${collapse ? "hidden md:inline" : ""}`} ></span>}
             <Link to={`${!collapse ? "/" : ""}${newPath.toLowerCase()}`} className={`${(currPath && !collapse) ? "dark:bg-zinc-800 bg-zinc-100 font-medium" : ((currPath && collapse) ? "dark:bg-zinc-900 bg-zinc-100 font-medium" : "pl-4")} text-sm dark:text-zinc-200 w-full py-1 px-2 rounded-md whitespace-nowrap flex gap-x-2`}>
               {item.icon && <span className="text-zinc-400" >{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})} 
      {collapse && <li className="absolute right-4 md:static block md:hidden" key="ellipsis">
        <div className="relative">
          <Button 
            className="p-2 rounded-md border border-zinc-200 dark:border-zinc-800 p-2 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" 
            icon={<Ellipsis size={22} />} 
            onClick={() => setDropdown(prevDp => !prevDp)}
          />
           {showDropdown && (
            <ul className="absolute flex flex-col items-center divide-y divide-zinc-200 dark:divide-zinc-800 p-2 z-10 rounded-md bg-zinc-100 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mt-2 right-0">
              {items.slice(2).map((dpItem: itemsType) => (
                <li key={dpItem.name} className="w-full p-2 dark:text-zinc-200">
                  <Link className="w-full flex items-center gap-x-2" to={`${dpItem.name.toLowerCase()}`}>
                 {dpItem.icon && <span className="dark:text-zinc-200 text-zinc-400">{dpItem.icon}</span>}
                  <span className="dark:text-zinc-200 whitespace-nowrap text-sm">{dpItem.name}</span>
                  </Link>
                </li>
              ))} 
            </ul>
          )} 
         </div>
       </li>} 
      </ul>
    </aside>
    );
};

export default memo(SidebarContent);