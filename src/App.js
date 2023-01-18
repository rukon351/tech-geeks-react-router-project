import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Vedios from './components/Vedios/Vedios';
import Login from './components/Login/Login';
import Navber from './components/Navber/Navber';
import NotFound from './components/NotFound/NotFound';
import BlogDetails from './components/BlogDetails/BlogDetails';
import { createContext, useState } from 'react';
import SignUp from './components/SignUp/SignUp';

export const BlogContext = createContext();

function App() {

  const [blogs, setBlogs] = useState([]);

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/vedios' element={<Vedios></Vedios>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
