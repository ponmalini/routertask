import logo from './logo.svg';
import './App.css';
import {Router,Routes,Route,BrowserRouter}from 'react-router-dom';
import Home from './components/Home';

import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Logout from './components/Logout';
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Login/>} />
          <Route path='/home' element ={<Home/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/signup' element ={<Signup/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/Logout' element ={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
