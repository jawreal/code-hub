import { useState, useCallback, lazy, Suspense, useMemo } from 'react';
import { Sun, Moon, AlignJustify, Search, Bell } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";
import { useActivePath } from '../helpers/pathChecker';
import { useLocation } from 'react-router-dom';
import Button from "../components/Button";
import Sidebar from "./Sidebar";
const SidebarContent = lazy(() => import("./SidebarContent"));
import SidebarSkeleton from '../components/SidebarSkeleton';
import BackdropBg from "../components/BackdropBg";
import Modal from "../components/Modal";
import SearchContent from "../components/SearchContent";
import Dropdown from "../components/Dropdown";
import LogoHeader from '../components/LogoHeader';
import { navItems, navDpItems } from '../data/sidebarData';
import { TOGGLE_STATE } from '../helpers/reusableTypes';

const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState<TOGGLE_STATE>({
    dropdown: false, 
    sidebar: false, 
    modal: false, 
  });
  const [darkMode, setDarkMode] = useDarkMode();
  const SelectedPage = useMemo(() => ["sign-in", "confirmation"].some(page => useActivePath(location.pathname, page)), [location]) 
  
  const openSidebar = useCallback(() => {
    setToggle((prev: TOGGLE_STATE) => ({ ...prev, sidebar: true }));
  }, []);
  
  const openModal = useCallback(() => {
     setToggle((prev: TOGGLE_STATE) => ({ ...prev, modal: true }));
  }, []);
  
  const openDropdown = useCallback(() => {
    setToggle((prev: TOGGLE_STATE) => ({...prev, dropdown: !prev.dropdown
   }));
  }, [toggle])
  
  const switchTheme = useCallback(() => {
    setDarkMode((prev: boolean) => !prev)
  }, [])

  return (
    <nav className={`bg-inherit dark:bg-zinc-950 py-2 flex flex-row px-2 md:px-0 justify-center items-center ${!SelectedPage ? "border-b dark:border-zinc-800 border-zinc-200" : ""} sticky top-0 z-50`}>
      <div className="flex items-center mr-auto md:ml-5 ml-3 space-x-2">
        {!SelectedPage && <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 active:bg-zinc-300/50 active:dark:bg-zinc-800" icon={<AlignJustify size={22} />} onClick={openSidebar}/>}
        <LogoHeader page={SelectedPage} />
      </div>
      {!SelectedPage && <BackdropBg show={toggle?.sidebar ?? false} setBackdrop={setToggle} objKey="sidebar">
        <Sidebar showSidebar={toggle?.sidebar ?? false} >
         <Suspense fallback={<SidebarSkeleton collapse={false} itemCount={navItems?.length} />}>
           <SidebarContent items={navItems} />
          </Suspense>
        </Sidebar>
      </BackdropBg>} 
      {!SelectedPage && <div className="w-full flex justify-end items-center">
         <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 active:bg-zinc-300/50 active:dark:bg-zinc-800" icon={<Search size={22} />} onClick={openModal}/>
        <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 ml-2 active:bg-zinc-300/50 active:dark:bg-zinc-800" icon={<Bell size={22} />}/>
         <BackdropBg show={toggle.modal ?? false} setBackdrop={setToggle} position="items-start" objKey="modal">
            <Modal openModal={toggle?.modal ?? false} setModal={setToggle} showCloseBtn={false}>
              <SearchContent />
            </Modal>
         </BackdropBg>
      </div>}
      <div className={`flex flex-row ml-auto items-center ${SelectedPage ? "md:mr-10" : "mr-3"}`}>
        <Button
        className={`${!SelectedPage ? "p-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-200/30 dark:bg-zinc-900/40 mx-2" : "p-2"} text-zinc-400 dark:text-zinc-200 active:bg-zinc-300/50 active:dark:bg-zinc-800`}
        icon={darkMode ? <Moon size={22} /> : <Sun size={22} />}
        onClick={switchTheme}
      />
      
      {!SelectedPage && 
         <div className="relative">
            <Button className="p-2 w-7 h-7 rounded-full bg-zinc-200" onClick={openDropdown}/>
            {toggle?.dropdown && <Dropdown setDropdown={setToggle} items={navDpItems} isSlice={false}/>}
         </div>}
      </div>
    </nav>
  );
};

export default Navbar;
