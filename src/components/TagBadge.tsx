import { memo } from 'react';

const TagBadge = ({ tags_item }: { tags_item: string[] }) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
    {tags_item.map((tag: string, index: number) => (<div key={index} className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-200/30 dark:bg-zinc-900 text-zinc-500 py-1 px-2 dark:text-zinc-200 text-sm"> 
       {tag}
     </div>))}
    </div>
    );
};

export default memo(TagBadge);