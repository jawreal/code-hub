import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-full min-h-screen relative bg-zinc-50 dark:bg-zinc-950 flex flex-col" >
       <Navbar />
       <Outlet />
    </div>
    );
};

export default Layout;