import { useMemo, Fragment } from 'react';
import Button from './Button';
import Image from './Image';
import { Link } from 'react-router-dom';
import { ArrowBigUp, MessageSquare, EllipsisVertical, Reply } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import formatDate from '../helpers/dateFormatter';


interface PostProps {
  width?: string;
  isPreview?: boolean;
  isComment?: boolean;
  userPost: any;
}

const UserPost = ({ width, isPreview = true, isComment = false, userPost }: PostProps) => {
  const timestamp = useMemo(() => formatDate(userPost?.createdAt), [userPost])
  return (
   <div id={userPost?._id.toString()} className={`${width} rounded-lg ${isComment ? "" : "border border-zinc-200 dark:border-zinc-800 px-1 pb-1"} flex flex-col items-center bg-inherit bg-inherit md:max-w-[35rem]`}>
    <div className={`${isComment ? "space-x-3" : "pt-2 px-3 space-x-2"} w-full flex items-center relative`}>
        <Image url={userPost.profile_img} className="rounded-full h-8 w-8" />
        <span className="font-medium flex flex-col dark:text-zinc-200">
        {userPost.username}
        <span className="text-xs text-zinc-400 inline-block">{timestamp ?? "2 days ago"}</span>
      </span>
      <Button className={`right-0 ${isComment ? "py-2" : "p-2"} text-zinc-400 dark:text-zinc-200 absolute top-1`}icon={<EllipsisVertical size={22} />} />
     </div>
     <div className={`w-full flex flex-col ${isPreview ? "text-ellipsis overflow-hidden" : ""} ${isComment ? "pl-11 md:pl-10" : "px-3"}`}>
       <div className={`w-full rounded-md flex flex-col ${isComment ? "border border-zinc-200 dark:border-zinc-800 px-3 pt-3 pb-2 mt-2" : ""}`}>
      {!isComment && <Fragment> <span className="bg-cyan-400/30 dark:bg-zinc-900 text-cyan-700 dark:text-cyan-500 py-1 my-1 px-3 rounded-full inline-block self-start text-sm font-medium">{userPost.post_type}</span>
      {userPost.title && <span className={`${isPreview ? 'line-clamp-2' : ''} font-medium dark:text-zinc-200 text-lg`}>{userPost.title}</span>}
      </Fragment>}
      <div className={`${isPreview ? "line-clamp-3 max-h-80" : ""} dark:text-zinc-400 text-sm md:text-base rounded-lg overflow-auto`}>
        <div className="wmde-markdown-var w-full">
           <MDEditor.Markdown source={userPost.body}       rehypePlugins={[[rehypeSanitize]]}/>
         </div>
      </div>
      {!isComment && <div className="w-full flex overflow-hidden space-x-1 pt-1">
        {userPost.tags?.map((tag: any, idx: number) => <span className="bg-zinc-600/20 dark:bg-zinc-900 text-zinc-700 dark:text-slate-200 py-1 px-3 rounded-full inline-block self-start text-sm font-medium" key={idx}>{tag.name}</span>)}
      </div>}
      <div className="flex items-center space-x-2 mt-2 mb-1">
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Button className="p-1 text-zinc-500 dark:text-zinc-200" icon={<ArrowBigUp size={22} />} />
          <span className="text-sm text-zinc-500 dark:text-zinc-200 font-medium p-1">{userPost?.votes ?? "0"}</span>
        </div>
        <div className="px-2 flex rounded-lg border border-zinc-200 dark:border-zinc-800 items-center" >
          <Link className="p-1 text-zinc-500 dark:text-zinc-200" to={`${window.location.origin}/view-post/${userPost._id}`}>
            {isComment ? <Reply size={22} /> : <MessageSquare size={22} />}
          </Link>
          <span className="text-sm text-zinc-500 dark:text-zinc-200 font-medium p-1">{userPost?.comments?.length ?? "0"}</span>
        </div>
        </div>
      </div> 
      </div>
   </div>
    );
};


export default UserPost;