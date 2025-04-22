const MarkdownSkeleton = () => {
  return (
    <div className="w-full animate-pulse h-[20rem] md:h-[36rem]">
      <div className="h-10 bg-zinc-200 dark:bg-zinc-700 rounded mb-2 flex">
        <div className="flex gap-2 p-2">
          {[1, 2, 3, 4, 5, 6, 7].map((item: number) => (
            <div key={item} className="w-8 h-6 bg-zinc-300 dark:bg-zinc-600 rounded"></div>
          ))}
        </div>
      </div>
      <div className="h-64 bg-zinc-200 dark:bg-zinc-700 rounded h-full">
        <div className="p-4 space-y-3">
          <div className="h-4 bg-zinc-300 dark:bg-zinc-600 rounded w-3/4"></div>
          <div className="h-4 bg-zinc-300 dark:bg-zinc-600 rounded w-1/2"></div>
          <div className="h-4 bg-zinc-300 dark:bg-zinc-600 rounded w-5/6"></div>
          <div className="h-4 bg-zinc-300 dark:bg-zinc-600 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownSkeleton;