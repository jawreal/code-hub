import { lazy, Suspense, useCallback, memo, Dispatch, SetStateAction, useMemo, useState, useEffect } from 'react';
const MDEditor = lazy(() => import('@uiw/react-md-editor'));
import MarkdownSkeleton from './MarkdownSkeleton';
import rehypeSanitize from 'rehype-sanitize';
import { debounce } from 'lodash';

interface EDITOR_TYPE {
  value: string;
  setPostData: Dispatch<SetStateAction<POSTDATA_TYPE>>;
}

const MemoizedMDEditor = memo(({ value, onChange }: { 
  value: string; 
  onChange: (value?: string) => void 
}) => {
  return useMemo(() => (
    <MDEditor
      value={value}
      height="100%"
      visibleDragbar={true}
      preview="edit"
      onChange={onChange}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]]
      }}
    />
  ), [value, onChange]); 
});

const MarkdownEditor = ({ value, setPostData }: EDITOR_TYPE) => {
  const [localValue, setLocalValue] = useState(value);
  
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  
  const debouncedSetPostData = useCallback(
    debounce((newValue: string) => {
      if (newValue !== undefined) {
        setPostData((prevData: POSTDATA_TYPE) => ({ ...prevData, body: newValue }));
      }
    }, 500),
    [setPostData] 
  );
  
  useEffect(() => {
    return () => {
      debouncedSetPostData.cancel();
    };
  }, [debouncedSetPostData]);
 
  const handleChange = useCallback((newValue?: string) => {
    setLocalValue(newValue || '');
    debouncedSetPostData(newValue || '');
  }, [debouncedSetPostData]);
  
  return (
    <div className="w-full h-[25rem] md:h-[40rem]">
      <Suspense fallback={<MarkdownSkeleton />}>
        <MemoizedMDEditor 
          value={localValue} 
          onChange={handleChange} 
        />
      </Suspense>
    </div>
  );
};

export default memo(MarkdownEditor);