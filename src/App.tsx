import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/client/SignIn';
import Layout from './layouts/Layout';
import Home from './pages/client/Home';
import Challenge from './pages/client/Challenge';
import CreatePost from './pages/client/CreatePost';

function App() {
  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>} />  
            <Route path="challenges" element={<Challenge />} /> 
            <Route path="create-post" element={<CreatePost />} /> 
         </Route> 
         <Route path="/sign-in" element={<SignIn />} />
       </Routes>
     </Router>
    </>
    );
};

export default App
