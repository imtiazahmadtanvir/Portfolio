
import MainLayout from '../layout/MainLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home.jsx'
import Statistics from '../pages/statistics.jsx'
import Dashboard from '../pages/dashboard.jsx'
import Products from '../Components/Products/Products.jsx'
//path for multiple page its througing from array
const routes= createBrowserRouter(
    [
         {
            path: '/',
            // mainlayout alternative of App.jsx
            element: <MainLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>,
                    loader: () => fetch('../assets/file/device.json'),
                    children:[
                        { 
                            path: "/",
                            element: <Products />, 
                            loader: () => fetch('../assets/file/device.json') 
                        }, 
                            { 
                                path: "/home/:category", 
                                element: <Products />, 
                                loader: () => fetch('../assets/file/device.json') 
                            } 
                        ]
                    },
                {
                    path:'/statistics',
                    element: <Statistics />
                },
                {
                    path:'/dashboard',
                    element: <Dashboard />
                }
            ]
         },
    ]
  )

  export default routes