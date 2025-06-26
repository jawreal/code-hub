import UserPost from '../../components/UserPost';
import Button from '../../components/Button';
import Image from '../../components/Image';
import { MessageSquare } from 'lucide-react';
import { useAuthContext } from '../../hooks/useAuthChecker';

const Post = () => {
  const { info: { image } } = useAuthContext();
  
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-start gap-y-3 items-center p-2" >
      <div className="w-full max-w-[35rem] flex flex-col gap-y-3 p-2">
         <UserPost postId="post1" width="w-full" isPreview={false} />
         <span className="dark:text-zinc-200 font-medium">comments</span> 
         <div className="flex items-center gap-x-2">
            <Image url={image} className="h-8 w-8 rounded-full" />
            <Button className="w-full py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 flex gap-x-2 items-center" text="Add your comment" type="button"/> 
         </div>
         <UserPost postId="post2" width="w-full" isPreview={false} isComment={true}/>
         <UserPost postId="post3" width="w-full" isPreview={false} isComment={true}/>
       </div>
    </div>
    );
};

export default Post;