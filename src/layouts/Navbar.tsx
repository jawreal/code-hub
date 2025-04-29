import { useState, useCallback, lazy, Suspense } from 'react';
import { Sun, Moon, AlignJustify, Search, Bell } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";
import { RootState, AppDispatch } from '../features/store';
import { useDispatch, useSelector } from 'react-redux';
import { handleForm } from '../features/redux/SwitchFormSlice';
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
  const dispatch = useDispatch<AppDispatch>();
  const { isSignUp } = useSelector((state: RootState) => state.switchForm);
  const [darkMode, setDarkMode] = useDarkMode();
  const SignInPage = useActivePath(location.pathname, 'sign-in');
  
  const openSidebar = useCallback(() => {
    setToggle((prev: TOGGLE_STATE) => ({ ...prev, sidebar: true }));
  }, []);
  
  const openModal = useCallback(() => {
     setToggle((prev: TOGGLE_STATE) => ({ ...prev, modal: true }));
  }, []);
  
  const openDropdown = useCallback(() => {
    setToggle((prev: TOGGLE_STATE) => ({ ...prev, dropdown: !prev.dropdown}));
  }, [])
  
  const switchForm = useCallback(() => {
     dispatch(handleForm({ isSignUp: !isSignUp})) 
  }, [])
  
  const switchTheme = useCallback(() => {
    setDarkMode((prev: boolean) => !prev)
  }, [])

  return (
    <nav className={`bg-inherit dark:bg-zinc-950 py-2 flex flex-row px-2 md:px-0 justify-center items-center ${!SignInPage ? "border-b dark:border-zinc-800 border-zinc-200" : ""} sticky top-0 z-50`}>
      <div className="flex items-center mr-auto md:ml-5 ml-3 space-x-2">
        {!SignInPage && <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" icon={<AlignJustify size={22} />} onClick={openSidebar}/>}
        <LogoHeader page={SignInPage} />
      </div>
      {!SignInPage && <BackdropBg show={toggle?.sidebar ?? false} setBackdrop={setToggle} objKey="sidebar">
        <Sidebar showSidebar={toggle?.sidebar ?? false} >
         <Suspense fallback={<SidebarSkeleton collapse={false} itemCount={navItems?.length} />}>
           <SidebarContent items={navItems} />
          </Suspense>
        </Sidebar>
      </BackdropBg>} 
      {!SignInPage && <div className="w-full flex justify-end items-center">
         <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" icon={<Search size={22} />} onClick={openModal}/>
        <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 ml-2" icon={<Bell size={22} />}/>
         <BackdropBg show={toggle.modal ?? false} setBackdrop={setToggle} position="items-start" objKey="modal">
            <Modal openModal={toggle?.modal ?? false} setModal={setToggle} showCloseBtn={false}>
              <SearchContent />
            </Modal>
         </BackdropBg>
      </div>}
      <div className={`flex flex-row ml-auto items-center ${SignInPage ? "md:mr-10" : "mr-3"}`}>
        {SignInPage && <Button className="bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24" text={isSignUp ? "Sign In" : "Sign Up"} onClick={switchForm}/>} 
        <Button
        className={`${!SignInPage ? "p-1 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-200/30 dark:bg-zinc-900/40 mx-2" : "p-2"} text-zinc-400 dark:text-zinc-200`}
        icon={darkMode ? <Moon size={22} /> : <Sun size={22} />}
        onClick={switchTheme}
      />
      
      {!SignInPage && 
         <div className="relative">
            <Button className="p-2 w-7 h-7 rounded-full bg-zinc-200" onClick={openDropdown}/>
            {(!SignInPage && toggle?.dropdown) && <Dropdown setDropdown={setToggle} items={navDpItems} isSlice={false}/>}
         </div>}
      </div>
    </nav>
  );
};

export default Navbar;
