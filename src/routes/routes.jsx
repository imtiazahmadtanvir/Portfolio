
import MainLayout from '../layout/MainLayout'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Gadgets from '../pages/Gadgets'
import ProductDetails from '../pages/ProductDetails'
import DeshCart from '../components/DeshCart'
import Wishlist from '../components/Wishlist'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch('/Gadgets.json'),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Gadgets.json'),
        children: [
          {
            path: "/",
            element: <Gadgets />,
            loader: () => fetch('/Gadgets.json'),
          },
          {
            path: "/home/:category",
            element: <Gadgets />,
            loader: () => fetch('/Gadgets.json'),
          },
        ]
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/Gadgets.json'),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        errorElement: <ErrorPage></ErrorPage>,

      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Navigate to="/dashboard/cart" replace />
          },
          {
            path: "/dashboard/cart",
            element: <DeshCart />,
            loader: () => fetch('/Gadgets.json'),
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
            loader: () => fetch('/Gadgets.json'),
          },
        ]
      },
      {
        path: "/about",
        element: <About></About>,
        errorElement: <ErrorPage></ErrorPage>,

      },
    ]

  },
])

export default routes