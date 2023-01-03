import React, {Suspense} from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
const Login = React.lazy(() => import('./components/login/Login'))
const Navbar = React.lazy(() => import('./components/navbar/Navbar'))
const Home = React.lazy(() => import('./pages/home/Home'))
const BuyCard = React.lazy(() => import('./pages/buy-card/BuyCard'))

function App() {
  return (
    <Suspense fallback={
      <div className='pre-loader'>
        <h1>Loading...</h1>
      </div>
    }>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-details' element={<BuyCard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
