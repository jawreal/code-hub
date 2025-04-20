import { useState } from 'react';
import { Sun, Moon, AlignJustify } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";
import { RootState, AppDispatch } from '../features/store';
import { useDispatch, useSelector } from 'react-redux';
import { handleForm } from '../features/redux/SwitchFormSlice';
import { useActivePath } from '../helpers/pathChecker';
import { useLocation } from 'react-router-dom';
import Button from "../components/Button";
import Sidebar from "./Sidebar";
import SidebarContent from "./SidebarContent";
import BackdropBg from "../components/BackdropBg";
import Modal from "../components/Modal";
import SearchContent from "../components/SearchContent";
import LogoHeader from '../components/LogoHeader';
import { itemsType } from '../helpers/itemsType';
import { Home, Trophy, HelpCircle, Tags, Plus, Search } from "lucide-react";

const Navbar = () => {
  const menuItems: itemsType[] = [
  { name: "Home", icon: <Home size={22} /> },
  { name: "Challenges", icon: <Trophy size={22} /> },
  { name: "Create Post", icon: <Plus size={22} /> },
  { name: "Questions", icon: <HelpCircle size={22} /> },
  { name: "Tags", icon: <Tags size={22} /> },
  ]; 
  const location = useLocation();
  const [showSidebar, setSidebar] = useState<boolean>(false);
  const [showModal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isSignUp } = useSelector((state: RootState) => state.switchForm);
  const [darkMode, setDarkMode] = useDarkMode();
  const SignInPage = useActivePath(location.pathname, 'sign-in');

  return (
    <nav className={`bg-inherit dark:bg-zinc-950 py-2 flex flex-row px-2 md:px-0 justify-center items-center ${!SignInPage ? "border-b dark:border-zinc-800 border-zinc-200" : ""}`}>
      <div className="flex items-center mr-auto md:ml-5 ml-3 space-x-2">
        {!SignInPage && <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40" icon={<AlignJustify size={22} />} onClick={() => setSidebar(true)}/>}
        <LogoHeader page={SignInPage} />
      </div>
      {!SignInPage && <BackdropBg show={showSidebar} setBackdrop={setSidebar}>
        <Sidebar showSidebar={showSidebar} >
          <SidebarContent items={menuItems} />
        </Sidebar>
      </BackdropBg>} 
      {!SignInPage && <div className="w-full flex justify-end md:justify-center items-center">
         <Button className="p-1 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-200 bg-zinc-200/30 dark:bg-zinc-900/40 md:w-80" icon={<Search className="w-6 h-6 md:w-4 md:h-4" />} onClick={() => setModal(true)}/>
         <BackdropBg show={showModal} setBackdrop={setModal} position="items-start">
            <Modal openModal={showModal} setModal={setModal} showCloseBtn={false}>
              <SearchContent />
            </Modal>
         </BackdropBg>
      </div>}
      <div className="flex flex-row ml-auto gap-x-2 md:mr-10">
        {SignInPage && <Button className="bg-emerald-600 dark:bg-emerald-400/25 dark:border dark:border-emerald-50/20 rounded-md py-2 px-4 text-emerald-50 font-medium w-24" text={isSignUp ? "Sign In" : "Sign Up"} onClick={() => dispatch(handleForm({ isSignUp: !isSignUp}))}/>} 
        <Button
        className="p-2 text-dark dark:text-slate-200 mr-2"
        icon={darkMode ? <Moon className="w-6 h-6 text-slate-200" /> : <Sun className="w-6 h-6 text-black" />}
        onClick={() => setDarkMode((prev) => !prev)}
      />
      </div>
    </nav>
  );
};

export default Navbar;
