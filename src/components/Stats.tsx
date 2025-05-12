import { memo, ReactNode } from 'react';

interface STATS_TYPE {
  total: number;
  hasBorder: boolean;
  postType: string;
}
const Stats = ({ total, hasBorder, postType }: STATS_TYPE ) => {
  return(
     <div className={`flex-[1] h-10 p-2 ${hasBorder && "border-r border-zinc-200 dark:border-zinc-800"} flex flex-col justify-center items-center`}>
         <span className="font-extrabold dark:text-zinc-200 text-2xl">{total}</span>
         <span className="font-medium text-zinc-500 text-sm">{postType}</span>
      </div>
    );
}

export default memo(Stats);