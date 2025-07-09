import React, { memo, useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { useActivePath } from '../helpers/pathChecker';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthChecker';
import { Link } from 'react-router-dom';
import ConfirmSignout from './ConfirmSignout';
import BackdropBg from './BackdropBg';
import Modal from './Modal';

interface DP_TYPE {
  items: ITEMS_TYPE[];
  setDropdown: React.Dispatch<React.SetStateAction<TOGGLE_STATE>>;
  isSlice: boolean;
}


const Dropdown = ({ setDropdown, items, isSlice }: DP_TYPE) => {
  const { info: { username } } = useAuthContext();
  const location = useLocation();
  const outsideRef = useRef<HTMLUListElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const [show, setShowModal] = useState<TOGGLE_STATE>({
    modal: false, 
  });
  const memoizedItems = useMemo(() => {
    return isSlice ? items.slice(2) : items;
  }, [isSlice]);
  
  const signoutExist = useMemo(() => {
    return items?.some(item => item?.name === "Sign Out")
  }, [])

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;
    const clickedOutsideDropdown = outsideRef.current && !outsideRef.current.contains(target);
    const clickedOutsideBackdrop = backdropRef.current && !backdropRef.current.contains(target);
    const clickCondition = signoutExist ? (clickedOutsideDropdown && clickedOutsideBackdrop) : clickedOutsideDropdown;

    if (clickCondition) {
      setDropdown((prevState: TOGGLE_STATE) => ({
        ...prevState,
        dropdown: false
      }));
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  
  const showConfirmSignout = useCallback(() => {
    setShowModal(prevModal => ({
     ...prevModal, 
     modal: true
    }));
  }, []) 
  
  return (
     <>
     {signoutExist && <div ref={backdropRef}>
       <BackdropBg
         show={show.modal ?? false}
         setBackdrop={setShowModal}
         position="items-center"
         objKey="modal"
       >
         <Modal openModal={show?.modal ?? false} setModal={setShowModal} showCloseBtn={false}>
           <ConfirmSignout offModal={setShowModal} />
         </Modal>
       </BackdropBg>
     </div>}
     <ul ref={outsideRef} className={`absolute min-w-[11rem] flex flex-col items-center z-10 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 mt-2 right-0 shadow shadow-sm overflow-hidden ${show?.modal && "hidden"}`} >
         {memoizedItems?.map((item: ITEMS_TYPE) => {
          const newPath = item.name.replaceAll(" ", "-");
          const isSignOut = item?.name === "Sign Out";
          const currPath = useActivePath(location.pathname, newPath);
          return (<li key={item.name} className={`flex flex-row items-center w-full ${isSignOut && "border-t border-zinc-200 dark:border-zinc-700"}`}>
             <Link to={`${!isSignOut ? (item.name === "Profile" ? `/profile/${username}` : `/${newPath.toLowerCase()}`) : "#"}`} className={`${currPath ? "font-medium bg-zinc-200/30 dark:bg-zinc-800" : "bg-100/30"} dark:text-zinc-200 text-sm py-3 px-3 w-full whitespace-nowrap flex gap-x-3 ${isSignOut && "active:bg-zinc-200/30 active:dark:bg-zinc-800/60"}`} onClick={isSignOut ? showConfirmSignout : undefined}>
               {item.icon && <span className="text-zinc-400" >{item.icon}</span>}
              <span>{item.name}</span>
             </Link>
          </li>)})}  
         </ul>
         </>
    );
};

export default memo(Dropdown);