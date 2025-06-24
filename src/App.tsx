import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageFallback from './components/PageFallback';
import Layout from './layouts/Layout';
import WelcomeBack from './pages/client/WelcomeBackForm';
import CreateAcc from './pages/client/CreateAccForm';
const SignIn = lazy(() => import('./pages/client/SignIn'));
const Home = lazy(() => import('./pages/client/Home'));
const Challenge = lazy(() => import('./pages/client/Challenge'));
const CreatePost = lazy(() => import('./pages/client/CreatePost'));
const Questions = lazy(() => import('./pages/client/Questions'));
const Profile = lazy(() => import('./pages/client/Profile'));
const Post = lazy(() => import('./pages/client/Post'));
const Confirmation = lazy(() => import('./pages/client/Confirmation'));

import useDarkMode from './hooks/useDarkMode';
import { AuthProvider } from './hooks/useAuthChecker';

const queryClient = new QueryClient();

function App() {
  useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Layout />
                </Suspense>
              }
            >
              <Route
                path="home"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="challenges"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <Challenge />
                  </Suspense>
                }
              />
              <Route
                path="create-post"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <CreatePost />
                  </Suspense>
                }
              />
              <Route
                path="questions"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <Questions />
                  </Suspense>
                }
              />
             <Route
                path="post"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <Post />
                  </Suspense>
                }
              />
              <Route
                path="profile/:params"
                element={
                  <Suspense fallback={<PageFallback />}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/sign-in"
              element={
                <Suspense fallback={<PageFallback />}>
                  <SignIn />
                </Suspense>
              }>
               <Route index element={<WelcomeBack />} />
               <Route path="create" element={<CreateAcc />} />
            </Route>
            <Route
              path="/confirmation"
              element={
                <Suspense fallback={<PageFallback />}>
                  <Confirmation />
                </Suspense>
               }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
