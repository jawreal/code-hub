import { memo, useCallback, useState, Dispatch, SetStateAction } from 'react';
import Button from './Button';
import TagButton from './TagButton';
import AddNewTag from './AddNewTag';
import InlineAlert from './InlineAlert';
import { TAGS_TYPE, TOGGLE_STATE, INLINEALERT_TYPE } from '../helpers/reusableTypes';

interface TAGCONTENT_TYPE {
  setSelectedTag: Dispatch<SetStateAction<TAGS_TYPE[]>>;
  closeModal: Dispatch<SetStateAction<TOGGLE_STATE>>;
}


const TagContent = ({ setSelectedTag, closeModal }: TAGCONTENT_TYPE) => {
  const [showInlineAlert, setShowInlineAlert] = useState<INLINEALERT_TYPE>({
    type: "", 
    text: "", 
    isActive: false, 
  });
  const [newTags, setNewTags] = useState<TAGS_TYPE[]>([]);
  const [tags, setTag] = useState<TAGS_TYPE[]>([
    { name: 'React', isActive: false },
    { name: 'JavaScript', isActive: false },
    { name: 'TypeScript', isActive: false },
    { name: 'CSS', isActive: false },
    { name: 'HTML', isActive: false },
    { name: 'Php', isActive: false },
    { name: 'NextJs', isActive: false },
    { name: 'MongoDB', isActive: false },
    { name: 'SQL', isActive: false },
    { name: 'Python', isActive: false },
    ]);
    
  const activateTag = useCallback((tagName: string) => {
    setTag((prevData: TAGS_TYPE[]) =>
      prevData.map((tag: TAGS_TYPE) => 
      tag.name === tagName
      ? { ...tag, isActive: !tag.isActive }
      : tag));
    }, []);
    
  const confirmTag = useCallback(() => {
    const filteredTag = tags.filter(tag => tag.isActive === true)
    if((filteredTag.length + newTags.length) > 5 ) {
      setShowInlineAlert({ type: "error", text: "You've reached the maximum number of tags (5). Please remove some to add new ones.", isActive: true }); 
      return;
    }
    setSelectedTag(filteredTag); 
    if (newTags.length > 0){
      setSelectedTag((prevTag: TAGS_TYPE[]) => [...prevTag, ...newTags]);
    }
    
    setNewTags([]);
    setTag((prevTags: TAGS_TYPE[]) => prevTags.map((tag: TAGS_TYPE) => ({
     ...tag,
     isActive: false
    })));
    
    if(showInlineAlert.isActive) setShowInlineAlert({ type: "", text: "", isActive: false}); 
    closeModal({ modal: false });
  }, [tags, newTags]);
  
  const cancelTag = useCallback(() => {
    setNewTags([]);
    setTag((prevTags: TAGS_TYPE[]) => prevTags.map((tag: TAGS_TYPE) => ({
     ...tag,
     isActive: false
    })));
    if(showInlineAlert.isActive) setShowInlineAlert({ type: "", text: "", isActive: false}); 
    closeModal({ modal: false });
  }, [])
  return(
    <div className="w-full flex flex-col">
       <div className="w-full flex flex-col px-2">
          <div className="flex flex-col text-left w-full">
             <span className="font-medium dark:text-zinc-200 text-lg">Select tags</span>
             <small className="text-zinc-500">select tags or create new one</small>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 py-1">
           <TagButton items={tags} setState={activateTag} />
         </div>
         <div className="flex flex-col w-full mt-2 text-left">
           <span className="font-medium dark:text-zinc-200">Add another tag</span>
           <small className="text-zinc-500 mb-2">add new tag if it doesn't exist</small>
           <AddNewTag tags={tags}
             isDisplayed={showInlineAlert?.isActive ?? false}
             setShowInlineAlert={setShowInlineAlert} newTags={newTags} setNewTags={setNewTags}/>
           {showInlineAlert?.isActive && <InlineAlert text={showInlineAlert?.text ?? ""} type={showInlineAlert.type}/>}
         </div>
         <div className="w-full mt-3 flex justify-end gap-x-1">
           <Button className="dark:text-zinc-500 text-zinc-400 font-medium p-2 rounded-md active:bg-zinc-200/30 active:dark:bg-zinc-700" text="Cancel" onClick={cancelTag}/>
           <Button className="rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-emerald-500 bg-zinc-200/30 font-medium dark:bg-zinc-800 active:bg-zinc-300/50 active:dark:bg-zinc-700 p-2" onClick={confirmTag} text="Confirm" />
         </div>
       </div>
    </div>
    );
};

export default memo(TagContent);