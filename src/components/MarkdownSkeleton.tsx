import React from 'react';

const MarkdownSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-2 flex">
        <div className="flex gap-2 p-2">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="w-8 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
          ))}
        </div>
      </div>
      
      <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded mb-4">
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>
      </div>
      
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded">
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownSkeleton;