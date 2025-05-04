import { lazy, Suspense, useCallback, memo, Dispatch, SetStateAction } from 'react';
const MDEditor = lazy(() => import('@uiw/react-md-editor'));
import { POSTDATA_TYPE } from '../helpers/reusableTypes';
import MarkdownSkeleton from './MarkdownSkeleton';

interface EDITOR_TYPE {
  value: string;
  setPostData: Dispatch<SetStateAction<POSTDATA_TYPE>>;
}

const MemoizedMDEditor = memo(({ value, onChange }: { 
  value: string; 
  onChange: (value?: string) => void 
}) => {
  return (
    <MDEditor
      value={value}
      height="100%"
      preview="edit"
      onChange={onChange}
    />
  );
});

const MarkdownEditor = ({ value, setPostData }: EDITOR_TYPE) => {
 
  const handleChange = useCallback((newValue?: string) => {
    if (newValue !== undefined) {
      setPostData((prevData: POSTDATA_TYPE) => ({
        ...prevData, 
        body: newValue
      }));
    }
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