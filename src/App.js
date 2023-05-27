import React, {Suspense} from "react"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Movies from "./pages/movies/Movies";
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
        <Route path='/movies' element={<Movies />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-details' element={<BuyCard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
