import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Checkout from './component/Checkout/Checkout';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/checkout' element={
         <RequireAuth>
         <Checkout></Checkout>
       </RequireAuth>
      }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
