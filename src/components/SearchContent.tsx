import Inputbox from './Inputbox';
import { Search } from 'lucide-react';


const SearchContent = () => {
  return (
     <form className="flex flex-col items-center w-full h-80">
        <Inputbox icon={<Search className="text-zinc-400 dark:text-zinc-600" size={22} />} placeholder="Search" />
        <div className="w-full h-full text-left">
           <div className="flex justify-center items-center w-full h-full">
             <span className="text-sm text-zinc-400 dark:text-zinc-600">no recent searches</span>
           </div>
        </div>
     </form>
    );
};

export default SearchContent;