
import MainLayout from '../layout/MainLayout'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Details from '../pages/Details'
import Gadgets from '../pages/Gadgets'
import ProductDetails from '../pages/ProductDetails'


const routes= createBrowserRouter([
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
            children:[
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
            path: "dashboard",
            element: <Dashboard></Dashboard>,
            errorElement: <ErrorPage></ErrorPage>,

          },
          {
            path: "/about",
            element:<About></About>,
            errorElement: <ErrorPage></ErrorPage>,

          },
          {
            path: "details",
            element: <Details></Details>,
            loader: () => fetch('/Gadgets.json'),
            errorElement: <ErrorPage></ErrorPage>,

          },
      ]
   
    },
    ])

  export default routes