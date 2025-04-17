import UserPost from '../../components/UserPost';
import { itemsType } from '../../helpers/itemsType';
import SidebarContent from '../../layouts/SidebarContent';
import { Sparkles, Zap, HelpCircle, MessageSquareMore, Star } from "lucide-react";

const Challenge = () => {
  const items: itemsType[] = [
  { name: "Newest", icon: <Sparkles size={22} /> },
  { name: "Active", icon: <Zap size={22} /> },
  { name: "Unanswered", icon: <HelpCircle size={22} /> },
  { name: "Frequently Asked", icon: <MessageSquareMore size={22} /> },
  { name: "Top Rated", icon: <Star size={22} /> },
];
   
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <section className="md:flex-[1] w-full md:w-auto md:border-r border-zinc-200 dark:border-zinc-900 md:p-2 md:h-screen order-1 bg-inherit md:max-w-64"> 
         <SidebarContent items={items} collapse={true} /> 
      </section>
      <main className="flex-[2] order-2  h-full pb-12 bg-inherit flex flex-col"> 
         <div className="h-full flex flex-col w-full gap-y-3 p-3">
             <UserPost width="w-full md:pl-5 md:border-l-none px-3 max-w-[60rem]"/>
             <UserPost width="w-full md:pl-5 md:border-l-none px-2 max-w-[60rem]"/>
             <UserPost width="w-full md:pl-5 md:border-l-none px-2 max-w-[60rem]"/>
         </div>
      </main>      
    </div>
    );
};

export default Challenge;