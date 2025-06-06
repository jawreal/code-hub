import Image from '../../components/Image';
import { STATSDATA_TYPE } from '../../helpers/reusableTypes';
import { PencilLine, History, MapPin, Mail } from 'lucide-react';
import Button from '../../components/Button';
import Stats from '../../components/Stats';
import Details from '../../components/Details';
import TagBadge from '../../components/TagBadge';
const tagItemsData = ["JavaScript", "Java", "Python", "Php", "NodeJs"];
const statsData: STATSDATA_TYPE[] = [
  { total: 36, hasBorder: true, postType: "Questions" },
  { total: 56, hasBorder: true, postType: "Challenges" },
  { total: 230, hasBorder: false, postType: "Answers" },
];

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-2 space-y-3 md:space-x-3 md:space-y-0">
      <section className="w-full md:max-w-80 py-3 px-5 flex flex-col items-center rounded-md border border-zinc-200 dark:border-zinc-800">
         <Image className="bg-zinc-100 rounded-full w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2OjmihDXthKrF4Eaqakobyr2JT422gRpa9XagT6OjSZf7p_TDQ8mgLM&s=10"/>
         <div className="w-full flex flex-col px-4 justify-center items-center">
           <span className="font-bold text-lg md:text-2xl dark:text-zinc-200">John Doe</span>
           <div className="flex flex-col items-center justify-center">
             <span className="dark:text-zinc-200 text-zinc-400 dark:text-zinc-600 text-sm md:text-base">user8080</span>
           </div>
           <Button className="rounded-md border border-zinc-200 dark:border-zinc-800 py-1 px-2 bg-zinc-200/30 active:bg-zinc-300/50 active:dark:bg-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 flex items-center self-center text-zinc-500 gap-x-2 my-2 text-sm md:text-base">
             <span><PencilLine size={17} /></span>
             <span>Edit profile</span> 
           </Button>
           <div className="w-full flex flex-col">
             <div className="w-full flex space-x-2 my-2">
                <Stats items={statsData} />
              </div>
           </div>
           <div className="w-full flex flex-col justify-center px-1 pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2 dark:border-zinc-800 gap-y-1">
             <Details text="Joined Sep 2, 2024" isStartPosition={false} icon={<History className="flex-shrink-0 h-5 mt-1 md:h-6"/>} />
             <Details text="johndoe@mail.com" isStartPosition={false} icon={<Mail className="flex-shrink-0 h-5 md:h-6"/>} />
             <Details text="456 Oxford Street, London, United Kingdom" isStartPosition={true} icon={<MapPin className="mt-1 flex-shrink-0 h-5 md:h-6" />} />
           </div>
         </div> 
      </section>
      <main className="w-full h-full flex flex-col">
        <div className="w-full max-w-[60rem] border border-zinc-200 dark:border-zinc-800 rounded-md py-2 px-4 md:px-3 space-y-2">
          <span className="dark:text-zinc-200 font-medium">Most used tags</span>
          <TagBadge tags_item={tagItemsData} />
        </div>
      </main>
    </div>
    );
};

export default Profile;