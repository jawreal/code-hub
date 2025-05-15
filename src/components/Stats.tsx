import { memo } from 'react';
import { STATSDATA_TYPE } from '../helpers/reusableTypes';

interface STATS_TYPE {
  items: STATSDATA_TYPE[];
}

const Stats = ({ items }: STATS_TYPE ) => {
  return(
    <>
     {items?.map((item: STATSDATA_TYPE, index: number) => (
     <div key={index} className={`flex-[1] h-10 p-2 ${item.hasBorder && "border-r border-zinc-200 dark:border-zinc-800"} flex flex-col justify-center items-center`}>
         <span className="font-extrabold dark:text-zinc-200 text-2xl">{item.total}</span>
         <span className="font-medium text-zinc-500 text-sm">{item.postType}</span>
      </div>))}
    </>
    );
}

export default memo(Stats);