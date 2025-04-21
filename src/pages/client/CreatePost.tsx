import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
import MarkdownEditor from '../../components/MarkdownEditor';

const CreatePost = () => {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row justify-center" >
      <main className="w-full order-2 h-full pb-8 px-3 md:px-2 md:max-w-[40rem]">
        <form className="bg-inherit w-full p-2 rounded-md flex flex-col items-center p-3">
         <div className="flex flex-col w-full space-y-2 md:space-y-4">
           <div className="flex flex-col w-full space-y-2">
             <div className="flex flex-col w-full">
               <label className="mb-0 dark:text-zinc-200 font-medium">Title</label>
               <small className="text-zinc-500">enter a descriptive title for your post to help readers understand what it's about.</small>
             </div>
             <div className="w-full">
               <Inputbox placeholder="Error in Typescript" />
             </div>
           </div>
           <div className="flex flex-col w-full"> 
             <label className="dark:text-zinc-200 font-medium">Body</label>
             <small className="text-zinc-500">ask your programming question or describe the issue you're trying to solve.</small>
           </div>
           <MarkdownEditor />
           <Button className="rounded-md font-medium p-2 bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 text-emerald-50 self-start mt-2" text="add tags" />
         </div>
       </form>
      </main>
    </div>
    );
};

export default CreatePost;