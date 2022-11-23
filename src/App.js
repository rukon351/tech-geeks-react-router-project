import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Vedios from './components/Vedios/Vedios';
import Login from './components/Login/Login';
import Navber from './components/Navber/Navber';
import NotFound from './components/NotFound/NotFound';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/vedios' element={<Vedios></Vedios>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
