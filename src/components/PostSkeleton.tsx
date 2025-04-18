const PostSkeleton = () => {
  return (
  <div className="w-full max-w-[60rem] border rounded-lg border-zinc-200 dark:border-zinc-800 flex flex-col items-center px-1 pb-1 bg-inherit animate-pulse">
    <div className="pt-2 px-3 w-full flex items-center space-x-2">
      <div className="bg-zinc-300 dark:bg-zinc-700 rounded-full h-8 w-8"></div>
      <div className="flex flex-col space-y-1 w-24">
        <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded w-20"></div>
        <div className="h-2 bg-zinc-200 dark:bg-zinc-600 rounded w-16"></div>
      </div>
    </div>
    <div className="px-3 w-full flex flex-col space-y-2">
      <div className="bg-cyan-300/30 dark:bg-cyan-700/30 h-5 w-24 rounded-full mt-2"></div>
      <div className="h-5 bg-zinc-300 dark:bg-zinc-600 rounded w-3/4"></div>
      <div className="space-y-1">
        <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
        <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-11/12"></div>
        <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6"></div>
      </div>
      <div className="w-full flex space-x-2 pt-1">
        <div className="h-5 w-20 bg-zinc-400/30 dark:bg-slate-600/30 rounded-full"></div>
      </div>
      <div className="flex items-center space-x-2 mt-2 mb-1">
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center space-x-1">
          <div className="h-5 w-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
          <div className="h-3 w-6 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
        </div>
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center space-x-1">
          <div className="h-5 w-5 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
          <div className="h-3 w-6 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);
};

export default PostSkeleton;