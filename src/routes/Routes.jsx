
import MainLayout from '../layout/MainLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home.jsx'
import Statistics from '../pages/statistics.jsx'
import Dashboard from '../pages/dashboard.jsx'
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
                    children:[
                        
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