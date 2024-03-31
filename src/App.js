import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './component/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Jobs from './component/Jobs/Jobs'
import Contact from './component/Contact/Contact'
import Company from './component/Company/Company'
import Login from './component/Login'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    sessionStorage.setItem('user', userData);
  }

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  }

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout handleLogout={handleLogout}/>}>
            <Route path="login" element={<Login onLogin={handleLogin} />}/>
            <Route path="home" element={<Home user={user}/>} />
            <Route path="about" element={<About user={user}/>}/>
            <Route path="jobs" element={<Jobs user={user} />} />
            <Route path="contact" element={<Contact user={user} />} />
            <Route path="company" element={<Company user={user} />} />
        </Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
