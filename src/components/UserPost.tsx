import Button from './Button';
import Image from './Image';
import { ArrowBigUp, MessageSquare, EllipsisVertical, Reply } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';


interface PostProps {
  width?: string;
  isPreview?: boolean;
  isComment?: boolean;
  post: any;
  keyNumber: number;
}

const UserPost = ({ width, isPreview = true, isComment = false, post, keyNumber }: PostProps) => {
  return (
   <div id={post._id.toString()} key={keyNumber} className={`${width} rounded-lg ${isComment ? "" : "border border-zinc-200 dark:border-zinc-800 px-1 pb-1"} flex flex-col items-center bg-inherit bg-inherit`}>
    <div className={`${isComment ? "space-x-3" : "pt-2 px-3 space-x-2"} w-full flex items-center relative`}>
        <Image url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LaT3rgL4twXZHNE_nXw-ZjNALijN4PzW4w&s" className="rounded-full h-8 w-8" />
        <span className="font-medium flex flex-col dark:text-zinc-200">
        Kurumi
        <span className="text-sm text-zinc-400 inline-block">11:30 pm</span>
      </span>
      <Button className={`right-0 ${isComment ? "py-2" : "p-2"} text-zinc-400 dark:text-zinc-200 absolute top-1`}icon={<EllipsisVertical size={22} />} />
     </div>
     <div className={`w-full flex flex-col ${isPreview ? "text-ellipsis overflow-hidden" : ""} ${isComment ? "pl-11 md:pl-10" : "px-3"}`}>
       <div className={`w-full rounded-md flex flex-col ${isComment ? "border border-zinc-200 dark:border-zinc-800 px-3 pt-3 pb-2 mt-2" : ""}`}>
      {!isComment && <> <span className="bg-cyan-400/30 dark:bg-zinc-900 text-cyan-700 dark:text-cyan-500 py-1 my-1 px-3 rounded-full inline-block self-start text-sm font-medium">{post.post_type}</span>
      <span className="truncate font-medium dark:text-zinc-200 text-lg">{post.title}</span> </>}
      <div className={`${isPreview ? "line-clamp-3 max-h-80" : ""} dark:text-zinc-400 text-sm md:text-base rounded-lg`}>
        <div className="wmde-markdown-var">
           <MDEditor.Markdown source={post.body}       rehypePlugins={[[rehypeSanitize]]}/>
         </div>
      </div>
      {!isComment && <div className="w-full flex overflow-auto space-x-1 pt-1">
        {post.tags.map((tag) => <span className="bg-zinc-600/20 dark:bg-zinc-900 text-zinc-700 dark:text-slate-200 py-1 px-3 rounded-full inline-block self-start text-sm font-medium" key={tag._id}>{tag?.name}</span>)}
      </div>}
      <div className="flex items-center space-x-2 mt-2 mb-1">
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={<ArrowBigUp size={22} />} />
          <span className="text-sm text-zinc-500 dark:text-zinc-200 font-medium p-1">2.3k</span>
        </div>
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={isComment ? <Reply size={22} /> : <MessageSquare size={22} />} />
          <span className="text-sm text-zinc-500 dark:text-zinc-200 font-medium p-1">128</span>
        </div>
        </div>
      </div> 
      </div>
   </div>
    );
};


export default UserPost;