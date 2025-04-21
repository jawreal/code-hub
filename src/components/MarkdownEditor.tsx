import { useState, lazy, Suspense } from 'react';
const MDEditor = lazy(() => import('@uiw/react-md-editor'));
import MarkdownSkeleton from './MarkdownSkeleton';

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('**Hello Markdown!**');
  const handleChange = (value?: string) => {
    if (value !== undefined) {
      setValue(value);
    }
  };

  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
     <Suspense fallback={<MarkdownSkeleton />}>
       <MDEditor
        value={value}
        height="100%"
        preview="edit"
        onChange={handleChange} />
     </Suspense>
    </div>
  );
};

export default MarkdownEditor;