import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
// import Categories from './components/Categories/Catefories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Wishlist from './components/Wishlist/Wishlist';
import Signin from './components/signin/Signin';
import Signup from './components/Signup/Signup';
import AuthLayout from './Layout/AuthLayout';
import NotFound from './components/NotFound/NotFound';
import { Offline, Online } from "react-detect-offline";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { StoreContextProvider } from './context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';
import Address from './components/Address/Address';
import AllOrders from './components/AllOrders/AllOrders';


function App() {
  let routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes> <Products /></ProtectedRoutes> },
        { path: 'About', element: <ProtectedRoutes> <About /></ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes> <Brands /></ProtectedRoutes> },
        { path: 'Cart', element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
        { path: 'Wishlist', element: <ProtectedRoutes> <Wishlist /></ProtectedRoutes> },
        { path: 'product-details/:id', element: <ProtectedRoutes> <ProductDetails /></ProtectedRoutes> },
        { path: 'address/:id', element: <ProtectedRoutes> <Address /></ProtectedRoutes> },
        { path: 'allorders', element: <ProtectedRoutes> <AllOrders /></ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [

        { path: 'signup', element: <Signup /> },
        { path: 'Signin', element: <Signin /> },
      ]
    }
  ])
  return (
    <>


      <StoreContextProvider>
        <RouterProvider router={routes} />
      </StoreContextProvider>


      <ToastContainer theme='colored' autoClose={700}/>

      <Offline>
        <div className="offline">
          you are offline Now!
        </div>
      </Offline>

    </>
  )
}

export default App;
