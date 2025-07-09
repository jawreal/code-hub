import { useState, useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from '../../components/Image';
import { useParams } from 'react-router-dom';
import BackdropBg from '../../components/BackdropBg';
import Modal from '../../components/Modal';
import EditInfo from '../../components/EditInfo';
import { PencilLine, History, MapPin, Mail } from 'lucide-react';
import Button from '../../components/Button';
import Stats from '../../components/Stats';
import Details from '../../components/Details';
import TagBadge from '../../components/TagBadge';
import getInfo from '../../services/getInfo';
const tagItemsData = ["JavaScript", "Java", "Python", "Php", "NodeJs"];

const Profile = () => {
  const { params } = useParams();
  const { data, isError } = useQuery({
    queryKey: ["getInfo", params], 
    queryFn: () => getInfo(params ?? undefined) //needs to be wrapped with function o it'd not immediately get fetched 
  });
  const [edit, setEdit] = useState<TOGGLE_STATE>({
    modal: false
  });
  const statsData: STATSDATA_TYPE[] = useMemo(() => [
  { total: data?.totalQuestions, hasBorder: true, postType: "Questions" },
  { total: data?.totalChallenges, hasBorder: true, postType: "Challenges" },
  { total: data?.totalAnswers, hasBorder: false, postType: "Answers" },
  ], [data])
  
  const openEditModal = useCallback(() => {
    setEdit(prevState => ({
     ...prevState, 
     modal: true
    }));
  }, []);
  
  if(isError) return <div>404 user not found</div>
  
  const closeEditModal = useCallback(() => {
    setEdit(prevState => ({
     ...prevState, 
     modal: false
    }));
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col md:flex-row p-2 space-y-3 md:space-x-3 md:space-y-0">
      <BackdropBg show={edit.modal ?? false} setBackdrop={setEdit} position="items-center" objKey="modal">
         <Modal openModal={edit?.modal ?? false} setModal={setEdit} showCloseBtn={true}>
            <EditInfo closeModal={closeEditModal} data={data}/>
         </Modal>
      </BackdropBg>
      <section className="w-full md:max-w-80 py-3 px-5 flex flex-col items-center rounded-md border border-zinc-200 dark:border-zinc-800">
         <Image className="bg-zinc-100 rounded-full w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]" url={data?.profile_img}/>
         <div className="w-full flex flex-col px-4 justify-center items-center">
           <span className="font-bold text-lg md:text-2xl dark:text-zinc-200 mt-1">{data?.displayName ?? "Not specified"}</span>
           <div className="flex flex-col items-center justify-center">
             <span className="dark:text-zinc-200 text-zinc-400 dark:text-zinc-600 text-sm md:text-base">{data?.username}</span>
           </div>
           <Button className="rounded-md border border-zinc-200 dark:border-zinc-800 py-1 px-2 bg-zinc-200/30 active:bg-zinc-300/50 active:dark:bg-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 flex items-center self-center text-zinc-500 gap-x-2 my-2 text-sm md:text-base" onClick={openEditModal}>
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
             <Details text={data?.email} isStartPosition={false} icon={<Mail className="flex-shrink-0 h-5 md:h-6"/>} />
             <Details text={data?.address} isStartPosition={true} icon={<MapPin className="mt-1 flex-shrink-0 h-5 md:h-6" />} />
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