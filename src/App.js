import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom"
import BuyCard from './pages/buy-card/BuyCard';

function App() {
  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes> */}
      {/* 
      <Home /> */}
      {/* <Login /> */}
      <BuyCard />
    </>
  );
}

export default App;
