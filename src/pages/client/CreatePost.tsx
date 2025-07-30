import { useState, useCallback, lazy, Suspense } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Spinner from '../../assets/Spinner'
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import TagButton from '../../components/TagButton';
import { Plus, HelpCircle, Trophy, Send } from 'lucide-react';
import MarkdownEditor from '../../components/MarkdownEditor';
import BackdropBg from '../../components/BackdropBg';
import Modal from '../../components/Modal';
const TagContent = lazy(() => import('../../components/TagContent'));


const CreatePost = () => {
  const [selectedTag, setSelectedTag] = useState<TAGS_TYPE[]>([]);
  const [showModal, setModal] = useState<TOGGLE_STATE>({
    modal: false, 
  })
  const [postData, setPostData] = useState<POSTDATA_TYPE>({
    post_type: null, 
    title: "", 
    body: "", 
  });
  const questionPost = useCallback(() => {
    setPostData((prevState: POSTDATA_TYPE) => ({
     ...prevState,
     post_type: "question", 
    }))
  }, []);
  
  const challengePost = useCallback(() => {
    setPostData((prevState: POSTDATA_TYPE) => ({
     ...prevState,
     post_type: "challenge", 
    }))
  }, []);
  
  const openModal = useCallback(() => {
    setModal({ modal: true })
  }, [])
  
  const filterTag = useCallback((tagName: string) => {
    setSelectedTag((prev) => prev.filter((tag) => tag.name !== tagName));
    setPostData(prevData => ({...prevData, tags: [tagName]}));
  }, [postData]);
  
  const handleTitle = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostData(prevData => ({...prevData, title: e.target.value }));
  }, [postData]);
  
  const onSend = useCallback(async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const tagsToSend = selectedTag.map((tag: TAGS_TYPE) => ({ name: tag.name }));
      console.log(tagsToSend)
      await fetch('http://localhost:3000/api/upload-post', {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({...postData, tags: [...tagsToSend]}), 
        credentials: 'include'
      });
    }catch(err){
      console.log(err);
    }
  }, [postData, selectedTag]);
  
  
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row justify-center" >
      <main className="w-full order-2 h-full pb-8 px-3 md:px-2 md:max-w-[40rem]">
        <form onSubmit={onSend} className="bg-inherit w-full p-2 rounded-md flex flex-col items-center p-3">
         <div className="w-full grid grid-cols-2 gap-x-2 mb-3">
           <span className="dark:text-zinc-200 font-medium col-span-2">What are you posting?</span>
           <small className="text-zinc-500 col-span-2 mb-2">select which one you are planning to post (required)</small>
           <Button className={`transition-all duration-300 rounded-md border ${postData.post_type === "question" ? "border-b-8 border-emerald-500 dark:border-emerald-700 dark:text-zinc-200" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"} w-full py-3 px-4 h-36 md:h-auto flex flex-col justify-center relative`} onClick={questionPost}>
             <div className="w-full flex flex-col md:flex-row items-center gap-y-1 md:gap-x-2">
               <span className={`${postData.post_type === "question" ? "dark:text-zinc-200" : "text-zinc-500"} rounded-full p-3 bg-zinc-200 dark:bg-zinc-800`}><HelpCircle size={22} /></span>
               <div className="flex flex-col md:items-start">
                 <span className="font-medium">Question</span> 
                 <small className="text-zinc-500">Ask the community for help</small>
                </div>
             </div>
           </Button>
           <Button className={`transition-all duration-300 ease-in-out rounded-md border ${postData.post_type === "challenge" ? "border-b-8 border-emerald-500 dark:border-emerald-700 dark:text-zinc-200" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"} w-full py-3 px-4 h-36 md:h-auto flex flex-col justify-center`} onClick={challengePost}>
             <div className="w-full flex flex-col md:flex-row items-center gap-y-1 md:gap-x-2">
               <span className={`${postData.post_type === "challenge" ? "dark:text-zinc-200" : "text-zinc-500"} rounded-full p-3 bg-zinc-200 dark:bg-zinc-800`}><Trophy size={22} /></span>
               <div className="flex flex-col md:items-start">
                 <span className="font-medium">Challenge</span> 
                 <small className="text-zinc-500">Challenge for the community</small>
                </div>
             </div>
           </Button>
         </div>
         <div className="flex flex-col w-full space-y-2 md:space-y-4">
           <div className="flex flex-col w-full space-y-2">
             <div className="flex flex-col w-full">
               <span className="mb-0 dark:text-zinc-200 font-medium">Title</span>
               <small className="text-zinc-500">enter a descriptive title for your post to help readers understand what it's about</small>
             </div>
             <div className="w-full">
               <Inputbox value={postData.title} onChange={handleTitle} placeholder="Your descriptive title" />
             </div>
           </div>
          <div className="w-full flex flex-col mt-2">
             <span className="dark:text-zinc-200 font-medium">Tags</span>
             <small className="text-zinc-500 mb-2">choose tags or create new ones</small>
             <div className="flex mb-2 gap-2 flex-wrap w-full items-center overflow-hidden">
             {selectedTag.length > 0 && 
               <TagButton items={selectedTag} setState={filterTag} />}
             <Button className="rounded-md border border-zinc-200 dark:border-zinc-800 py-1 px-2 bg-zinc-200/30 active:bg-zinc-300/50 active:dark:bg-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 flex space-x-2 items-center self-start text-zinc-500 text-sm gap-x-1" onClick={openModal}>
                 Add tags
                <Plus size={18} /></Button>
            </div> 
            <BackdropBg show={showModal.modal ?? false} setBackdrop={setModal} position="items-center" objKey="modal">
              <Modal openModal={showModal?.modal ?? false} setModal={setModal} showCloseBtn={true}>
                 <Suspense fallback={<Spinner size="w-10 h-10" />}>
                  <TagContent setSelectedTag={setSelectedTag} closeModal={setModal}/>
                 </Suspense>
              </Modal>
           </BackdropBg>
           </div> 
           <div className="flex flex-col w-full"> 
             <span className="dark:text-zinc-200 font-medium">Body</span>
             <small className="text-zinc-500">ask your programming question or describe the issue you're trying to solve</small>
           </div>
           <MarkdownEditor value={postData?.body ?? ""} setPostData={setPostData}/>
         </div>
         <Button className="bg-zinc-200 rounded-md dark:bg-zinc-900 active:bg-zinc-300/80 dark:active:bg-zinc-800/20 px-3 py-2 text-zinc-600 border border-zinc-300 dark:border-zinc-800 dark:text-zinc-200 font-medium mt-3 ml-auto flex items-center gap-x-2 justify-center" type="submit">
            <span><Send size={20} /></span>
            <span>Send Question</span>
         </Button>
       </form>
      </main>
    </div>
    );
};

export default CreatePost;