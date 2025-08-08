import { lazy, Suspense, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PostSkeleton from '../../components/PostSkeleton';
import getPost from '../../services/getPost';
const UserPost = lazy(() => import('../../components/UserPost'));

interface ITags extends Pick<TAGS_TYPE, 'name'> {
  user: string;
}

interface IPost extends POSTDATA_TYPE {
  tags: ITags[];
}

const Home = () => {
  const [postData, setPostData] = useState<IPost[]>([]);
  const { data, isLoading } = useQuery({
    queryFn: getPost, 
    queryKey: ["getPost"]
  });
  
  useEffect(() => {
    if(!isLoading){
      console.log(data)
      setPostData(data);
    }
  }, [isLoading]);
  
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col" >
      <main className="h-full pb-8 flex flex-col items-center">
         <div className="w-full h-full flex flex-col items-center gap-y-3 p-3">
            <Suspense fallback={<PostSkeleton />}>
            {postData.map((post: IPost, idx: number) => <UserPost userPost={post} width="w-full" key={idx}/>)}
            </Suspense>
         </div>
      </main>
    </div>
    );
};

export default Home;