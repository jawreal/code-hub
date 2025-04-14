import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ellipsis } from "lucide-react";
import { ActivePath } from '../helpers/pathChecker';
import { itemsType } from '../helpers/itemsType';
import Button from '../components/Button';

interface NAV_PROPS {
  items: itemsType[];
}

const HomeNav = ({ items }: NAV_PROPS) => {
  const [showDropdown, setDropdown] = useState<boolean>(false);
  
  return (
    <ul className="dark:border-zinc-900 md:static md:z-auto flex items-center w-full md:justify-center bg-inherit border-b border-zinc-200 dark:border-zinc-900 relative p-2 md:static">
      {items.map((item: itemsType, index: number) => {
        const currPath = ActivePath(item.name);
        return (
          <li key={item.name} className={`flex flex-col items-center px-4 dark:text-zinc-200 ${index < 2 ? "block" : "hidden md:block"} py-2 md:py-1`}>
            <Link className={`w-full flex items-center justify-center gap-x-2 ${currPath ? "rounded font-medium" : "font-base"}`} to={`${item.name.toLowerCase()}`}>
              <span className="dark:text-zinc-200 whitespace-nowrap">{item.name}</span>
            </Link>
            {currPath && <span className="inline-block w-full rounded h-1 bg-emerald-600"></span>}
          </li>
        );
      })}
      
      <li className="absolute right-4 md:static block md:hidden" key="ellipsis">
        <div className="relative">
          <Button 
            className="p-2 rounded-md border border-zinc-200 dark:border-zinc-900 p-2 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" 
            icon={<Ellipsis size={22} />} 
            onClick={() => setDropdown(prevDp => !prevDp)}
          />
          {showDropdown && (
            <ul className="absolute flex flex-col items-center divide-y divide-zinc-200 dark:divide-zinc-900 p-2 z-10 rounded-md bg-zinc-100 border border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-950 mt-2 right-0">
              {items.slice(2).map((dpItem: itemsType) => (
                <li key={dpItem.name} className="w-full p-2 dark:text-zinc-200">
                  <Link to={dpItem.name.toLowerCase()}>
                    {dpItem.name}
                  </Link>
                </li>
              ))} 
            </ul>
          )} 
        </div>
      </li>
    </ul>
  );
};

export default HomeNav;