import { memo, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface TAGBTN_TYPE {
  items: TAGS_TYPE[];
  setState?: (tagName: string) => void;
}

const TagButton = ({ items, setState }: TAGBTN_TYPE) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleTagClick = useCallback((tagName: string) => {
    if (timeoutRef.current) return;
    if(setState) {
      setState(tagName ?? "")
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
    }, 500)
  }, [])
  return (
    <>
      {items.map((tag, idx) => (
        <Button
          key={idx}
          className={`rounded-md border ${
            tag.isActive
              ? "bg-emerald-100 border-emerald-400 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-800/30"
              : "border-zinc-200 dark:border-zinc-700 bg-zinc-200/30 dark:bg-zinc-800 text-zinc-500 active:bg-emerald-500/50"
          } py-1 px-2 active:dark:bg-zinc-700 dark:text-zinc-200 flex space-x-1 items-center self-start text-sm`}
          onClick={() => handleTagClick(tag.name)}
        >
          <span>{tag.name}</span>
          {tag.isActive && <span><X size={16} /></span>}
        </Button>
      ))}
    </>
  );
};

export default memo(TagButton);