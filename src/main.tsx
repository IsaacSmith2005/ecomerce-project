import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home.tsx'                                
import Blog from './blog/Blog.tsx'
import Shop from './shop/Shop.tsx';
import SingleProduct from './shop/SingleProduct.tsx';
import CartPage from './shop/CartPage.tsx';
import SingleBlog from './blog/SingleBlog.tsx';
import About from './about/About.tsx';
import AuthProvider from './contexts/AuthProvider.tsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.tsx';
import Login from './components/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:id', element: <SingleBlog /> },
      { path: '/shop', element: <Shop /> },
      { path: '/shop/:id', element: <SingleProduct /> },
      { path: "/cart-page", element: <PrivateRoute><CartPage /></PrivateRoute>},
      { path: '/about', element: <About />}
    ] 
  },
  {
    path: "login", element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);