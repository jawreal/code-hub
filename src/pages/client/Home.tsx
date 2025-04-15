import { lazy, Suspense } from 'react';
const UserPost = lazy(() => import('../../components/UserPost'));

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col md:flex-row" >
      <main className="md:flex-[2] order-2  h-full pb-8">
         <div className="h-full flex flex-col">
            <Suspense fallback={<div>loading...</div>}>
              <UserPost width="w-full md:pl-5"/>
              <UserPost width="w-full md:pl-5"/>
              <UserPost width="w-full md:pl-5"/>
            </Suspense>
         </div>
      </main>
      <section className="md:flex-[1] fixed bottom-0 md:static z-10 w-full md:w-auto md:border-r border-zinc-300 dark:border-zinc-900 md:p-2 md:h-screen order-1 bg-inherit md:max-w-64">
      </section>
    </div>
    );
};

export default Home;