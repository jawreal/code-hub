import { memo } from 'react';
import { itemsType } from '../helpers/itemsType';
import { ActivePath } from '../helpers/pathChecker';
import { Link } from 'react-router-dom';
import { Home, Trophy, HelpCircle, Tags, Plus } from "lucide-react";

const StaticSidebar = () => {
  const menuItems: itemsType[] = [
  { name: "Home", icon: <Home size={22} /> },
  { name: "Challenges", icon: <Trophy size={22} /> },
  { name: "Create Post", icon: <Plus size={22} /> },
  { name: "Questions", icon: <HelpCircle size={22} /> },
  { name: "Tags", icon: <Tags size={22} /> },
  ]; 
  return (
    <aside className="w-full flex flex-col bg-inherit">
      <ul className="flex flex-col pt-1 md:pt-0 md:border-none bg-inherit">
        {menuItems?.map((item: itemsType) => {
          const newPath = item.name.replaceAll(" ", "-");
          const currPath = ActivePath(newPath);
          return (<li key={item.name} className="w-full flex flex-row items-center space-x-1">
             {currPath && <span className="w-1 rounded-md h-6 bg-emerald-600"></span>} 
             <Link to={`/${newPath.toLowerCase()}`} className={`${currPath ? "dark:bg-emerald-400/15 bg-emerald-400/25 font-medium" : "pl-4"} text-sm dark:text-zinc-200 w-full py-1 px-2 rounded-md whitespace-nowrap flex gap-x-2`}>
               {item.icon && <span className={`${currPath ? "text-emerald-600 md:text-current md:dark:text-zinc-200" : "text-zinc-500"}`}>{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})} 
      </ul>
    </aside>
    );
};

export default memo(StaticSidebar);