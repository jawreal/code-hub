import StaticSidebar from '../../layouts/StaticSidebar';
import UserPost from '../../components/UserPost';
import { itemsType } from '../../helpers/itemsType';
import HomeNav from '../../layouts/HomeNav';

const Challenge = () => {
  const items: itemsType[] = [
  { name: "All Challenges" },
  { name: "Beginner" },
  { name: "Intermediate" },
  { name: "Advanced" },
  { name: "Weekly Challenges" },
  ]; 
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <main className="md:flex-[2] order-2  h-full pb-12 bg-inherit">    
         <HomeNav items={items} /> 
         <div className="h-full flex flex-col">
             <UserPost width="w-full md:pl-5 border-l-none px-2"/>
             <UserPost width="w-full md:pl-5 border-l-none px-2"/>
             <UserPost width="w-full md:pl-5 border-l-none px-2"/>
         </div>
      </main>      
      <section className="md:flex-[1] order-1 fixed bottom-0 md:static z-10 w-full md:border-r border-zinc-300 dark:border-zinc-900 md:p-2 md:h-screen order-1 bg-inherit md:max-w-64">
         <StaticSidebar />
      </section>
    </div>
    );
};

export default Challenge;