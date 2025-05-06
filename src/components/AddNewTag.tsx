import { memo, useState, useRef, useCallback, ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from 'react';
import Inputbox from './Inputbox';
import TagButton from './TagButton';
import { TAGS_TYPE, INLINEALERT_TYPE } from '../helpers/reusableTypes';

interface NEWTAG_TYPE {
  tags: TAGS_TYPE[];
  newTags: TAGS_TYPE[];
  setNewTags: Dispatch<SetStateAction<TAGS_TYPE[]>>;
  isDisplayed: boolean;
  setShowInlineAlert: Dispatch<SetStateAction<INLINEALERT_TYPE>>;
}

const AddNewTag = ({ tags, newTags, setNewTags, isDisplayed, setShowInlineAlert }: NEWTAG_TYPE) => {
  const [input, setInput] = useState<string>('');
  const currentRef = useRef<HTMLInputElement | null>(null);
  console.log("Rendered")
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Backspace' && newTags.length > 0) {
      console.log(input)
      setNewTags((prevTags: TAGS_TYPE[]) => prevTags.slice(0, -1));
      if(isDisplayed) setShowInlineAlert((prevData) => ({...prevData,
      isActive: false }));
    } 
    //I had to double it since it causes if just one
    if(isDisplayed) setShowInlineAlert((prevData) => ({...prevData,
      isActive: false }));  
  }, [newTags, input]);
  
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value as string;
    setInput(value);
    const isExist = tags.find(tag => tag.name.toLowerCase() === value.trim().toLowerCase());
    if(isExist){
      setShowInlineAlert({ type: "info", text: "This tag is already available. Simply click to choose it.", isActive: true }); 
      return
    }
    if (value.endsWith(' ')) {
      const formattedString = value.trim().replace(/,/g, '');
      if (formattedString && !newTags.some(tag => tag.name === formattedString)) {
        const newTag = { name: formattedString, isActive: true };
        setNewTags((prevTags: TAGS_TYPE[]) => [...prevTags, newTag]);
      }
      setInput("") 
      currentRef?.current?.focus();
    }
  }, []);
  
  const removeTag = useCallback((tagName: string) => {
    setNewTags((prevTags: TAGS_TYPE[]) => prevTags.filter((tag) => tag.name !== tagName))
  }, [])
  
  return (
    <div className={`w-full flex flex-wrap items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-800 ${newTags.length > 0 && "py-2"} px-2`}>
      <TagButton items={newTags} setState={removeTag}/>
      <Inputbox 
        ref={currentRef}
        value={input} 
        type="text"
        onKeyDown={handleKeyDown} 
        onChange={handleChange} 
        placeholder={`${newTags.length === 0 ? "(e.g, Supabase)" : ""}`} 
        isTransparent={true}
      />
    </div>
  );
};

export default memo(AddNewTag, (prev, next) => {
  return (
    prev.newTags === next.newTags &&
    prev.setNewTags === next.setNewTags &&
    prev.isDisplayed === next.isDisplayed &&
    prev.setShowInlineAlert === next.setShowInlineAlert
  );
});