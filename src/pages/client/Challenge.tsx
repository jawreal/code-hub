import { lazy, Suspense } from 'react';
import PostSkeleton from '../../components/PostSkeleton';
import SidebarSkeleton from '../../components/SidebarSkeleton';
const SidebarContent = lazy(() => import('../../layouts/SidebarContent'));
const UserPost = lazy(() => import('../../components/UserPost'));
import { ITEMS_TYPE } from '../../helpers/reusableTypes';
import { LayoutGrid, BookOpen, Layers, Award, Calendar } from 'lucide-react';

const items: ITEMS_TYPE[] = [
  { name: "Overview", icon: <LayoutGrid size={22} /> },
  { name: "Beginner", icon: <BookOpen size={22} /> },
  { name: "Intermediate", icon: <Layers size={22} /> },
  { name: "Advanced", icon: <Award size={22} /> },
  { name: "Weekly", icon: <Calendar size={22} /> },
  ]; 

const Challenge = () => {
   
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <section className="md:flex-[1] w-full md:w-auto md:border-r border-zinc-200 dark:border-zinc-800 md:p-2 md:h-screen order-1 bg-inherit md:max-w-64"> 
         <Suspense fallback={<SidebarSkeleton collapse={true} itemCount={items?.length} />}>
             <SidebarContent items={items} collapse={true} />
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