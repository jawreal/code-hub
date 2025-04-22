import { lazy, Suspense } from 'react';
import PostSkeleton from '../../components/PostSkeleton';
const UserPost = lazy(() => import('../../components/UserPost'));

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <main className="md:flex-[2] order-2  h-full pb-8">
         <div className="h-full flex flex-col gap-y-3 p-3">
            <Suspense fallback={<PostSkeleton />}>
              <UserPost width="w-full md:pl-5"/>
              <UserPost width="w-full md:pl-5"/>
              <UserPost width="w-full md:pl-5"/>
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