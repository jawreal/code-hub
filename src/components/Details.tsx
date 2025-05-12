import { memo, ReactNode } from 'react';

interface DETAILS_TYPE {
  text: string;
  icon: ReactNode;
  isStartPosition: boolean;
}

const Details = ({ text, icon, isStartPosition }: DETAILS_TYPE) => {
  return (
      <div className={`dark:text-zinc-200 text-zinc-400 dark:text-zinc-600 text-sm md:text-base flex gap-x-1 w-full ${isStartPosition ? "items-start" : "items-center"}`}>
         <span>{icon}</span>
         <span>{text}</span>
      </div>
    );
};

export default memo(Details);