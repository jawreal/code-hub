import { memo } from 'react';

interface SkeletonProps {
  collapse?: boolean;
  itemCount?: number;
}

const SidebarSkeleton = ({ collapse = false, itemCount = 5 }: SkeletonProps) => {
  return (
    <aside className="w-full flex flex-col bg-inherit animate-pulse">
      {!collapse && (
        <div className="w-full flex flex-row items-center space-x-1 pl-3 mb-1">
          <div className="h-8 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
        </div>
      )}
      
      <ul className={`flex bg-inherit ${collapse 
        ? "flex-row md:flex-col items-center md:items-start w-full bg-inherit border-b md:border-none border-zinc-200 dark:border-zinc-800 relative px-2 md:px-0 py-2 md:static space-x-5 md:space-x-0" 
        : "flex-col pt-1 md:pt-0 md:border-none"}`}>
        
        {Array(itemCount).fill(0).map((_, index) => (
          <li key={index} className={`${(collapse && index < 2) 
            ? "flex md:w-full" 
            : (!collapse ? "flex w-full" : "hidden md:flex w-full")} flex-row items-center md:pl-2 py-1`}>
            <div className={`py-1 px-2 rounded-md w-full flex gap-x-2`}>
            <div className="h-5 w-5 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="h-5 w-24 rounded-md bg-zinc-200 dark:bg-zinc-800"></div>
            </div>
          </li>
        ))}
        {collapse && (
          <li className="absolute right-5 md:static block md:hidden">
            <div className="relative">
              <div className="p-1 h-8 w-8 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800"></div>
            </div>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default memo(SidebarSkeleton);