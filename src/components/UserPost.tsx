import Button from './Button';
import { ArrowBigUp, MessageSquare, EllipsisVertical, Reply } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';


interface PostProps {
  width: string;
  isPreview: boolean;
  isComment: boolean;
  postId: string;
}

const content = `
I'm trying to customize the scrollbar that appears inside a \`<code>\` block, especially when the content overflows horizontally on smaller screens like mobile devices.

Here's an example array I'm displaying in a markdown editor:

\`\`\`js
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];
\`\`\`

When the code is rendered, especially on mobile, it creates a horizontal scrollbar, which is expected. However, I want to change the appearance of that scrollbar to match the rest of my design — like changing its color, thickness, and making it slightly less rounded.

I already tried applying some custom CSS to the \`code\` and \`pre\` tags, but it doesn't seem to have any effect. I’m not sure if the styles are being overridden or if I’m not targeting the right elements.

This is part of my CSS:

\`\`\`css
code,
pre {
  scrollbar-width: thin;
  scrollbar-color: #a1a1aa #e4e4e7;
}

code::-webkit-scrollbar,
pre::-webkit-scrollbar {
  height: 8px;
  background: transparent;
}

code::-webkit-scrollbar-thumb,
pre::-webkit-scrollbar-thumb {
  background-color: #52525b;
  border-radius: 4px;
}
\`\`\`

It seems to work partially in desktop browsers, but not at all on mobile Chrome or Safari.

Is there a proper way to ensure the scrollbar style works on all platforms, or is this just a limitation with mobile support for scrollbar styling? Also, is there a better selector or a more consistent approach for targeting scrollbars inside inline or block code content?

Any help or suggestions would be appreciated!
`;


const UserPost = ({ width, isPreview = true, isComment = false, postId }: PostProps) => {
  return (
   <div id={postId} className={`${width} rounded-lg ${isComment ? "" : "border border-zinc-200 dark:border-zinc-800 px-1 pb-1"} flex flex-col items-center bg-inherit bg-inherit`}>
    <div className={`${isComment ? "space-x-3" : "pt-2 px-3 space-x-2"} w-full flex items-center relative`}>
     <div className="bg-zinc-300 rounded-full h-8 w-8"></div>
        <span className="font-medium flex flex-col dark:text-zinc-200">
        Kurumi
        <span className="text-sm text-zinc-400 inline-block">11:30 pm</span>
      </span>
      <Button className={`right-0 ${isComment ? "py-2" : "p-2"} text-zinc-400 dark:text-zinc-200 absolute top-1`}icon={<EllipsisVertical size={22} />} />
     </div>
     <div className={`w-full flex flex-col ${isPreview ? "text-ellipsis overflow-hidden" : ""} ${isComment ? "pl-11 md:pl-10" : "px-3"}`}>
       <div className={`w-full rounded-md flex flex-col ${isComment ? "border border-zinc-200 dark:border-zinc-800 px-3 pt-3 pb-2 mt-2" : ""}`}>
      {!isComment && <> <span className="bg-cyan-400/30 dark:bg-zinc-900 text-cyan-700 dark:text-cyan-500 py-1 my-1 px-3 rounded-full inline-block self-start text-sm font-medium">Question</span>
      <span className="truncate font-medium dark:text-zinc-200 text-lg">Customizing scrollbar</span> </>}
      <div className={`${isPreview ? "line-clamp-3 max-h-80" : ""} dark:text-zinc-400 text-sm md:text-base rounded-lg`}>
        <div className="wmde-markdown-var">
           <MDEditor.Markdown source={content} />
         </div>
      </div>
      {!isComment && <div className="w-full flex overflow-auto space-x-1 pt-1">
        <span className="bg-zinc-600/20 dark:bg-zinc-900 text-zinc-700 dark:text-slate-200 py-1 px-3 rounded-full inline-block self-start text-sm font-medium">Typescript</span>
      </div>}
      <div className="flex items-center space-x-2 mt-2 mb-1">
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={<ArrowBigUp size={22} />} />
          <span className="text-sm text-zinc-500 p-1">2.3k</span>
        </div>
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={isComment ? <Reply size={22} /> : <MessageSquare size={22} />} />
          <span className="text-sm text-zinc-500 p-1">128</span>
        </div>
        </div>
      </div> 
      </div>
   </div>
    );
};


export default UserPost;