import { useState, lazy, Suspense, useCallback, memo } from 'react';
const MDEditor = lazy(() => import('@uiw/react-md-editor'));
import MarkdownSkeleton from './MarkdownSkeleton';

const MemoizedMDEditor = memo(({ value, onChange }) => {
  return (
    <MDEditor
      value={value}
      height="100%"
      preview="edit"
      onChange={onChange}
    />
  );
});

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('**Put your post details here**');
  
  const handleChange = useCallback((newValue?: string) => {
      setValue(newValue);
  }, []);
  

  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
      <Suspense fallback={<MarkdownSkeleton />}>
        <MemoizedMDEditor 
          value={value} 
          onChange={handleChange} 
        />
      </Suspense>
    </div>
  );
};

export default memo(MarkdownEditor);