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
         <div className="h-full flex flex-col w-full justify-center items-center">
             <UserPost width="w-full md:pl-5 md:border-x px-2 max-w-[32rem]"/>
             <UserPost width="w-full md:pl-5 md:border-x px-2 max-w-[32rem]"/>
             <UserPost width="w-full md:pl-5 md:border-x px-2 max-w-[32rem]"/>
         </div>
      </main>      
    </div>
    );
};

export default Challenge;