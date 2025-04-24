import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageFallback from './components/PageFallback';
import Layout from './layouts/Layout';
const SignIn = lazy(() => import('./pages/client/SignIn'));
const Home = lazy(() => import('./pages/client/Home'));
const Challenge = lazy(() => import('./pages/client/Challenge'));
const CreatePost = lazy(() => import('./pages/client/CreatePost'));
const Questions = lazy(() => import('./pages/client/Questions'));
import useDarkMode from './hooks/useDarkMode';

function App() {
  useDarkMode();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<PageFallback />}>
              <Layout />
            </Suspense>
          }>
            <Route path="home" element={
              <Suspense fallback={<PageFallback />}>
                <Home />
              </Suspense>
            } />
            <Route path="challenges" element={
              <Suspense fallback={<PageFallback />}>
                <Challenge />
              </Suspense>
            } />
            <Route path="create-post" element={
              <Suspense fallback={<PageFallback />}>
                <CreatePost />
              </Suspense>
            } />
            <Route path="questions" element={
              <Suspense fallback={<PageFallback />}>
                <Questions />
              </Suspense>
            } />
          </Route>
          <Route path="/sign-in" element={
            <Suspense fallback={<PageFallback />}>
              <SignIn />
            </Suspense>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;