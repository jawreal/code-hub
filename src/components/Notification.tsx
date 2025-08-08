import { memo, useCallback, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Button from './Button';
import Image from './Image';
import BackdropBg from './BackdropBg';
import { Bell } from 'lucide-react';

const Notification = () => {
  const [show, setShow] = useState<TOGGLE_STATE>({
    modal: false
  });
  
  const onModal = useCallback(() => {
    setShow((prevData: TOGGLE_STATE) => ({
     ...prevData, 
     modal: true
    }));
  }, [show]);
  
  return (
  <Fragment>
    <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 ml-2 active:bg-zinc-300/50 active:dark:bg-zinc-800 relative" onClick={onModal}>
       <span className="rounded-full bg-red-500 text-red-50 text-xs font-medium absolute right-0 top-0 flex justify-center items-center p-2 h-3 w-3">1</span>
       <Bell size={22} />
    </Button> 
    <BackdropBg show={show.modal ?? false} setBackdrop={setShow} position="items-start" objKey="modal">
        <Modal openModal={show?.modal ?? false} setModal={setShow} showCloseBtn={false}>
         <span className="dark:text-zinc-200 font-medium text-lg self-start mb-1">Notification</span> 
         <div className="flex flex-col w-full gap-y-2">
           <Link className="w-full flex flex-col items-start" to="#">
            <div className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 flex items-center p-2 gap-x-2">
               <Image url="https://api.dicebear.com/9.x/bottts/svg?seed=Dante" className="h-8 w-8 rounded-full self-start mt-2" />
               <div className="flex flex-col w-full items-center text-left">
                  <span className="font-medium dark:text-zinc-200 self-start leading-tight">Dante02 commented to your post</span>
                  <p className="line-clamp-2 dark:text-zinc-200 text-sm">
                  When posting code, consider including details about the environment, libraries, or frameworks you're using, it'll help others provide more accurate and relevant assistance!
                  </p>
                  <span className="dark:text-zinc-400 text-xs self-start text-zinc-500">2 minutes ago</span>
              </div>
            </div>
          </Link>
          <Link className="w-full flex flex-col items-start" to="#">
            <div className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 flex items-center p-2 gap-x-2">
               <Image url="https://api.dicebear.com/9.x/bottts/svg?seed=Carla" className="h-8 w-8 rounded-full self-start mt-2" />
               <div className="flex flex-col w-full items-center text-left">
                  <span className="font-medium dark:text-zinc-200 self-start leading-tight">def_not.Carla commented to your post</span>
                  <p className="line-clamp-2 dark:text-zinc-200 text-sm">
                  When posting code, consider formatting it with Markdown code blocks and specifying the language for better readability, it'll help others understand and assist you more efficiently!
                  </p>
                  <span className="dark:text-zinc-400 text-xs self-start text-zinc-500">2 minutes ago</span>
                 </div>
              </div>
            </Link>
          </div>
        </Modal>
    </BackdropBg>
  </Fragment>
  );
};

export default memo(Notification);