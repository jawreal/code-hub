import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarSkeleton from '../components/NavbarSkeleton';
const Navbar = lazy(() => import('./Navbar')); 

const Layout = () => {
  return (
    <div className="w-full min-h-screen relative bg-zinc-50 dark:bg-zinc-950 flex flex-col" >
       <Suspense fallback={<NavbarSkeleton />}>
         <Navbar />
       </Suspense>
       <Outlet />
    </div>
    );
};

export default Layout;