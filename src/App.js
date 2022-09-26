import React from 'react';
import {Routes, Route} from 'react-router-dom'
// import About from './components/About';

import Admin from './components/Admin';
import { AuthProvider } from './components/auth';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home'
import Login from './components/Login';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import Profile from './components/Profile';
import RequireAuth from './components/RequireAuth';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path ='about' element = {<React.Suspense fallback ='Loading...'><LazyAbout/> </React.Suspense>}/>
      <Route path='order-summary' element ={<OrderSummary/>}/>
      <Route path='products' element = {<Products />}>
        <Route index element ={<FeaturedProducts />}/>
        <Route path ='featured' element ={<FeaturedProducts/>}/>
        <Route path='new' element ={<NewProducts/>}/>
      </Route>
      <Route path='users' element = {<Users/>}>
        <Route path=':userId' element ={<UserDetails/>}/>
        <Route path='admin' element ={<Admin/>}/>
      </Route>
      <Route path ='profile' element ={<RequireAuth> <Profile /></RequireAuth>}/> 
      <Route path ='login' element ={<Login />}/>
      <Route path='*' element ={<NoMatch />}/>
    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;
