import { useState, lazy, Suspense, useCallback } from 'react';
import { Send } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Image from '../../components/Image';
import MarkdownSkeleton from '../../components/MarkdownSkeleton';
import { useAuthContext } from '../../hooks/useAuthChecker';
import getPostById from '../../services/getPostById';
import PostSkeleton from '../../components/PostSkeleton';
const MarkdownEditor = lazy(() => import('../../components/MarkdownEditor'));
const UserPost = lazy(() => import('../../components/UserPost'));

const Post = () => {
  const { info: { image } } = useAuthContext();
  const { postId } = useParams();
  const [showCommentBtn, setCommentBtn] = useState<boolean>(true);
  const { data: postData, isLoading } =  useQuery({
    queryKey: ["usePost", postId], 
    queryFn: () => getPostById(postId), 
    enabled: !!postId
   });
  
  const handleCommentBtn = useCallback(() => {
    setCommentBtn(prevState => !prevState);
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-start gap-y-3 items-center p-2" >
      <div className="w-full max-w-[35rem] flex flex-col gap-y-3 p-2">
         {!isLoading && <Suspense fallback={<PostSkeleton />}>
           {postData?.map((post: any, idx: number) => <UserPost userPost={post} width="w-full" key={idx} isPreview={false}/>)}
         </Suspense>}
         <span className="dark:text-zinc-200 font-medium">comments</span> 
         <div className="w-full flex flex-col gap-y-3">
           <div className={`flex ${showCommentBtn ? "items-start" : "items-start"} gap-x-3`}>
              <Image url={image} className="h-8 w-8 rounded-full" />
                <div className={`w-full ${showCommentBtn ? "" : "dark:border border-zinc-800 rounded-md"}`}>
                  {showCommentBtn ? (<Button className="w-full py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 flex gap-x-2 items-center" text="Add your comment" type="button" onClick={handleCommentBtn} />) :
                 (<Suspense fallback={<MarkdownSkeleton />}>
                    <MarkdownEditor />
                 </Suspense>)}
              </div>
           </div>
           {!showCommentBtn && <div className="w-full flex justify-end items-center gap-x-3">
               <Button className="p-2 text-zinc-400 dark:text-zinc-500 font-medium" text="discard" onClick={handleCommentBtn} />
               <Button className="p-2 rounded-md bg-emerald-500 dark:bg-emerald-600 text-emerald-50" icon={<Send size={20} />} />
           </div>}
         </div>
         {/*<UserPost postId="post2" width="w-full" isPreview={false} isComment={true}/>*/}
       </div>
    </div>
    );
};

export default Post;