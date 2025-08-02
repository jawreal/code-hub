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
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <main className="md:flex-[2] order-2  h-full pb-8">
         <div className="h-full flex flex-col gap-y-3 p-3">
            <Suspense fallback={<PostSkeleton />}>
            {postData.map((post: IPost, idx: number) => <UserPost userPost={post} width="w-full md:pl-5" key={idx}/>)}
            </Suspense>
         </div>
      </main>
      <section className="md:flex-[1] md:w-auto md:border-r border-zinc-200 dark:border-zinc-800 p-2 min-h-screen order-1 bg-inherit max-w-64 hidden md:flex flex-col items-center text-center"> 
         <span className="dark:text-zinc-200 font-medium">Notification</span>
      </section>
    </div>
    );
};

export default Home;