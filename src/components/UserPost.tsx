import Button from './Button';
import { ArrowBigUp, MessageSquare, Ellipsis } from 'lucide-react';

const UserPost = ({ width }:{ width: string; }) => {
  return (
   <div className={`${width} border rounded-lg border-zinc-200 dark:border-zinc-800 flex flex-col items-center px-1 pb-1 bg-inherit bg-inherit`}>
    <div className="pt-2 px-3 w-full flex items-center space-x-2 relative">
     <div className="bg-zinc-300 rounded-full h-8 w-8"></div>
        <span className="font-medium flex flex-col dark:text-zinc-200">
        Jaw_Real
        <span className="text-sm text-zinc-400 inline-block">11:30 pm</span>
      </span>
      <Button className="right-0 p-2 text-zinc-400 dark:text-zinc-200 absolute top-1" icon={<Ellipsis size={22} />} />
     </div>
     <div className="px-3 w-full flex flex-col overflow-hidden text-ellipsis">
      <span className="bg-cyan-400/30 dark:bg-zinc-900 text-cyan-700 dark:text-cyan-500 py-1 my-1 px-3 rounded-full inline-block self-start text-sm font-medium">Question</span>
      <span className="truncate font-medium dark:text-zinc-200 text-lg">Error on my side bar, can't fix it</span>
      <p className="line-clamp-3 dark:text-zinc-400 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="w-full flex overflow-auto space-x-1 pt-1">
        <span className="bg-zinc-600/20 dark:bg-zinc-900 text-zinc-700 dark:text-slate-200 py-1 px-3 rounded-full inline-block self-start text-sm font-medium">Typescript</span>
      </div>
      <div className="flex items-center space-x-2 mt-2 mb-1">
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={<ArrowBigUp size={22} />} />
          <span className="text-sm text-zinc-500 p-1">2.3k</span>
        </div>
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={<MessageSquare size={22} />} />
          <span className="text-sm text-zinc-500 p-1">128</span>
        </div>
      </div> 
      </div>
   </div>
    );
};


export default UserPost;