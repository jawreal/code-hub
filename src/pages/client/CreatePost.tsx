import { lazy, Suspense} from 'react';
import Inputbox from '../../components/Inputbox';
import Button from '../../components/Button';
const CodeEditor = lazy(() => import ('../../components/CodeEditor'));

const CreatePost = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <main className="md:flex-[2] order-2  h-full pb-8 px-3 md:px-2 md:max-w-[40rem]">
        <form className="bg-inherit w-full p-2 rounded-md flex flex-col items-center p-3">
         <div className="flex flex-col w-full space-y-2">
           <label className="dark:text-zinc-200 font-medium">Title</label>
           <Inputbox placeholder="Error in Typescript" />
           <label className="dark:text-zinc-200 font-medium">Body</label> 
           <Inputbox placeholder="Post details" type="textarea" />
           <label className="dark:text-zinc-200 font-medium mb-2">Code</label>
           <Suspense fallback={<div>loading...</div>}>
             <CodeEditor />
           </Suspense> 
           <Button className="rounded-md font-medium p-2 bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 text-emerald-50 self-start mt-2" text="add tags" />
         </div>
       </form>
      </main>
    </div>
    );
};

export default CreatePost;