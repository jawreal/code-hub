import { lazy, Suspense } from 'react';
import PostSkeleton from '../../components/PostSkeleton';
import SidebarSkeleton from '../../components/SidebarSkeleton';
const SidebarContent = lazy(() => import('../../layouts/SidebarContent'));
const UserPost = lazy(() => import('../../components/UserPost'));
import { questionItems } from '../../data/sidebarData';

const Challenge = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <section className="md:flex-[1] w-full md:w-auto md:border-r border-zinc-200 dark:border-zinc-900 md:p-2 md:h-screen order-1 bg-inherit md:max-w-64"> 
         <Suspense fallback={<SidebarSkeleton collapse={true} itemCount={questionItems?.length} />}>
             <SidebarContent items={questionItems} collapse={true} />
         </Suspense>
      </section>
      <main className="flex-[2] order-2  h-full pb-12 bg-inherit flex flex-col"> 
         <div className="h-full flex flex-col w-full gap-y-3 p-3">
          <Suspense fallback={<PostSkeleton />}>
             <UserPost width="w-full md:border-l-none px-2 max-w-[60rem]"/>
             <UserPost width="w-full md:border-l-none px-2 max-w-[60rem]"/>
             <UserPost width="w-full md:border-l-none px-2 max-w-[60rem]"/> 
            </Suspense>
         </div>
      </main>      
    </div>
    );
};

export default Challenge;